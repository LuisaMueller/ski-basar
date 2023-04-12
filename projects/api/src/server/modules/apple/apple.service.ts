import { assignPlain, ConfigService, CrudService, ServiceOptions } from '@lenne.tech/nest-server';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PubSub } from 'graphql-subscriptions';
import { Model } from 'mongoose';
import { Apple, AppleDocument } from './apple.model';
import { AppleCreateInput } from './inputs/apple-create.input';
import { AppleInput } from './inputs/apple.input';

/**
 * Apple service
 */
@Injectable()
export class AppleService extends CrudService<Apple, AppleCreateInput, AppleInput> {
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
    @InjectModel('Apple') protected readonly appleModel: Model<AppleDocument>,
    @Inject('PUB_SUB') protected readonly pubSub: PubSub
  ) {
    super({ configService: configService, mainDbModel: appleModel, mainModelConstructor: Apple });
  }

  // ===================================================================================================================
  // Methods
  // ===================================================================================================================

  /**
   * Create new Apple
   * Overwrites create method from CrudService
   */
  override async create(input: AppleCreateInput, serviceOptions?: ServiceOptions): Promise<Apple> {
    // Get new Apple
    const createdApple = await super.create(input, serviceOptions);

    // Inform subscriber
    if (serviceOptions?.pubSub === undefined || serviceOptions.pubSub) {
      await this.pubSub.publish('appleCreated', Apple.map(createdApple));
    }

    // Return created Apple
    return createdApple;
  }

  /**
   * Example method
   * Extends the CrudService
   */
  async exampleMethode(id: string, input: Record<string, any>, serviceOptions?: ServiceOptions): Promise<Apple> {
    // Get and check Apple
    const apple = await this.mainDbModel.findById(id).exec();
    if (!apple) {
      throw new NotFoundException(`Apple not found with ID: ${id}`);
    }

    // Process input and output
    return await this.process(
      async (data) => {
        // Update, save and return Apple
        return await assignPlain(apple, data.input).save();
      },
      { input, serviceOptions }
    );
  }
}
