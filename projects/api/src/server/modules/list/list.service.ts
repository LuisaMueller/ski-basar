import { assignPlain, ConfigService, CrudService, ServiceOptions } from '@lenne.tech/nest-server';
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
    input.number = all.length + 1;

    // Get new List
    const createdList = await super.create(input, serviceOptions);

    // Inform subscriber
    if (serviceOptions?.pubSub === undefined || serviceOptions.pubSub) {
      await this.pubSub.publish('listCreated', List.map(createdList));
    }

    // Return created List
    return createdList;
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
