import { assignPlain, ConfigService, CrudService, MailjetService, ServiceOptions } from '@lenne.tech/nest-server';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PubSub } from 'graphql-subscriptions';
import { Model } from 'mongoose';
import { ListCreateInput } from './inputs/list-create.input';
import { ListInput } from './inputs/list.input';
import { List, ListDocument } from './list.model';

/**
 * List service
 */
@Injectable()
export class ListService extends CrudService<List, ListCreateInput, ListInput> {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  // ===================================================================================================================
  // Injections
  // ===================================================================================================================

  /**
   * Constructor for injecting services
   *
   * Hints:
   * To resolve circular dependencies, integrate services as follows:
   * @Inject(forwardRef(() => XxxService)) protected readonly xxxService: XxxService
   */
  constructor(
    protected override readonly configService: ConfigService,
    private mailjetService: MailjetService,
    @InjectModel('List') protected readonly listModel: Model<ListDocument>,
    @Inject('PUB_SUB') protected readonly pubSub: PubSub
  ) {
    super({ configService: configService, mainDbModel: listModel, mainModelConstructor: List });
  }

  // ===================================================================================================================
  // Methods
  // ===================================================================================================================

  /**
   * Create new List
   * Overwrites create method from CrudService
   */
  override async create(input: ListCreateInput, serviceOptions?: ServiceOptions): Promise<List> {
    //Create number
    const all = await this.mainDbModel.find();
    input.number = all[all.length - 1].number + 1;

    // Get new List
    const createdList = await super.create(input, serviceOptions);

    // Inform subscriber
    if (serviceOptions?.pubSub === undefined || serviceOptions.pubSub) {
      await this.pubSub.publish('listCreated', List.map(createdList));
    }

    /**
     * Send Mail
     * nach erfolgreicher Nummernerstellung
     * wenn Bedarf besteht: wieder einkommentieren und entsprechend anpassen
     */
    // await this.mailjetService.sendMail(
    //   createdList.customer.email,
    //   'Olper Skibasar: Bestätigung der Nummer',
    //   4766616,   //Nummer des Mailjet-Tamplates
    //   {
    //     templateData: {
    //       firstName: createdList.customer.firstName, //Variablen, die übergeben werden
    //       lastName: createdList.customer.lastName,
    //     },
    //   }
    // );

    return createdList;
  }

  /**
   * Send Mail
   * nach erfolgreicher Warenannahme
   */
  async sendMail(id: string, input: string, serviceOptions?: ServiceOptions): Promise<List> {
    // Get and check List
    const list = await this.mainDbModel.findById(id).exec();
    if (!list) {
      throw new NotFoundException(`List not found with ID: ${id}`);
    }

    // Send mail
    await this.mailjetService.sendMail(list.customer.email, 'Olper Skibasar: Bestätigung der Warenannahme', 4769671, {
      templateData: {
        firstName: list.customer.firstName,
        lastName: list.customer.lastName,
        saturdayDate: '09.12.2023',
        sundayDate: '10.12.2023',
        startTimePickUp: '16:30', //Warenabholung am Sonntag
        endTimePickUp: '17:30', //Warenabholung am Sonntag
        timeslot1saturday: 'Nur Annahme: 11:00 - 12:00 Uhr',
        timeslot2saturday: 'Annahme und Verkauf: 13:00 - 18:00 Uhr',
        timeslot1sunday: 'Annahme und Verkauf: 11:00 - 15:00 Uhr',
        timeslot2sunday: 'Rückgabe der nicht verkauften Waren / des Verkaufserlöses: 16:30 - 17:30 Uhr',
      },
      attachments: [
        {
          ContentType: 'application/pdf',
          Filename: 'Skibasar-2023-Annahmebestätigung-Verkaufsnummer-' + list.number + '.pdf', //TODO: Name anpassen
          Base64Content: input,
        },
      ],
    });
    return list;
  }

  /**
   * Example method
   * Extends the CrudService
   */
  async exampleMethode(id: string, input: Record<string, any>, serviceOptions?: ServiceOptions): Promise<List> {
    // Get and check List
    const list = await this.mainDbModel.findById(id).exec();
    if (!list) {
      throw new NotFoundException(`List not found with ID: ${id}`);
    }

    // Process input and output
    return await this.process(
      async (data) => {
        // Update, save and return List
        return await assignPlain(list, data.input).save();
      },
      { input, serviceOptions }
    );
  }
}
