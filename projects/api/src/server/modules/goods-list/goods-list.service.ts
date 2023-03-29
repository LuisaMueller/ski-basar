import { assignPlain, ConfigService, CrudService, ServiceOptions } from '@lenne.tech/nest-server';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PubSub } from 'graphql-subscriptions';
import { Model } from 'mongoose';
import { GoodsList, GoodsListDocument } from './goods-list.model';
import { GoodsListCreateInput } from './inputs/goods-list-create.input';
import { GoodsListInput } from './inputs/goods-list.input';

/**
 * GoodsList service
 */
@Injectable()
export class GoodsListService extends CrudService<GoodsList, GoodsListCreateInput, GoodsListInput> {
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
    @InjectModel('GoodsList') protected readonly goodsListModel: Model<GoodsListDocument>,
    @Inject('PUB_SUB') protected readonly pubSub: PubSub
  ) {
    super({ configService: configService, mainDbModel: goodsListModel, mainModelConstructor: GoodsList });
  }

  // ===================================================================================================================
  // Methods
  // ===================================================================================================================

  /**
   * Create new GoodsList
   * Overwrites create method from CrudService
   */
  override async create(input: GoodsListCreateInput, serviceOptions?: ServiceOptions): Promise<GoodsList> {
    // Get new GoodsList
    const createdGoodsList = await super.create(input, serviceOptions);

    // Inform subscriber
    if (serviceOptions?.pubSub === undefined || serviceOptions.pubSub) {
      await this.pubSub.publish('goodsListCreated', GoodsList.map(createdGoodsList));
    }

    // Return created GoodsList
    return createdGoodsList;
  }

  /**
   * Example method
   * Extends the CrudService
   */
  async exampleMethode(id: string, input: Record<string, any>, serviceOptions?: ServiceOptions): Promise<GoodsList> {
    // Get and check GoodsList
    const goodsList = await this.mainDbModel.findById(id).exec();
    if (!goodsList) {
      throw new NotFoundException(`GoodsList not found with ID: ${id}`);
    }

    // Process input and output
    return await this.process(
      async (data) => {
        // Update, save and return GoodsList
        return await assignPlain(goodsList, data.input).save();
      },
      { input, serviceOptions }
    );
  }
}
