import { FilterArgs, GraphQLServiceOptions, RoleEnum, Roles, ServiceOptions } from '@lenne.tech/nest-server';
import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { GoodsListCreateInput } from './inputs/goods-list-create.input';
import { GoodsListInput } from './inputs/goods-list.input';
import { FindAndCountGoodsListsResult } from './outputs/find-and-count-goods-lists-result.output';
import { GoodsList } from './goods-list.model';
import { GoodsListService } from './goods-list.service';

/**
 * Resolver to process with GoodsList data
 */
// @Roles(RoleEnum.ADMIN)
@Resolver(() => GoodsList)
export class GoodsListResolver {
  /**
   * Import services
   */
  constructor(
    private readonly goodsListService: GoodsListService,
    @Inject('PUB_SUB') protected readonly pubSub: PubSub
  ) {}

  // ===========================================================================
  // Queries
  // ===========================================================================

  /**
   * Get and total count GoodsLists (via filter)
   */
  @Roles(RoleEnum.S_USER)
  @Query(() => FindAndCountGoodsListsResult, { description: 'Find GoodsLists (via filter)' })
  async findAndCountGoodsLists(
    @GraphQLServiceOptions({ gqlPath: 'findAndCountGoodsLists.items' }) serviceOptions: ServiceOptions,
    @Args() args?: FilterArgs
  ) {
    return await this.goodsListService.findAndCount(args, {
      ...serviceOptions,
      inputType: FilterArgs,
    });
  }

  /**
   * Get GoodsLists (via filter)
   */
  // @Roles(RoleEnum.S_USER)
  @Query(() => [GoodsList], { description: 'Find GoodsLists (via filter)' })
  async findGoodsLists(@GraphQLServiceOptions() serviceOptions: ServiceOptions, @Args() args?: FilterArgs) {
    return await this.goodsListService.find(args, {
      ...serviceOptions,
      inputType: FilterArgs,
    });
  }

  /**
   * Get GoodsList via ID
   */
  // @Roles(RoleEnum.S_USER)
  @Query(() => GoodsList, { description: 'Get GoodsList with specified ID' })
  async getGoodsList(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('id') id: string
  ): Promise<GoodsList> {
    return await this.goodsListService.get(id, serviceOptions);
  }

  // ===========================================================================
  // Mutations
  // ===========================================================================

  /**
   * Create new GoodsList
   */
  // @Roles(RoleEnum.S_USER)
  @Mutation(() => GoodsList, { description: 'Create a new GoodsList' })
  async createGoodsList(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('input') input: GoodsListCreateInput
  ): Promise<GoodsList> {
    return await this.goodsListService.create(input, {
      ...serviceOptions,
      inputType: GoodsListCreateInput,
    });
  }

  /**
   * Delete existing GoodsList
   */
  @Roles(RoleEnum.S_USER)
  @Mutation(() => GoodsList, { description: 'Delete existing GoodsList' })
  async deleteGoodsList(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('id') id: string
  ): Promise<GoodsList> {
    return await this.goodsListService.delete(id, {
      ...serviceOptions,
      roles: [RoleEnum.ADMIN, RoleEnum.S_CREATOR],
    });
  }

  /**
   * Update existing GoodsList
   */
  @Roles(RoleEnum.S_USER)
  @Mutation(() => GoodsList, { description: 'Update existing GoodsList' })
  async updateGoodsList(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('id') id: string,
    @Args('input') input: GoodsListInput
  ): Promise<GoodsList> {
    return await this.goodsListService.update(id, input, {
      serviceOptions,
      inputType: GoodsListInput,
      roles: [RoleEnum.ADMIN, RoleEnum.S_CREATOR],
    });
  }

  // ===========================================================================
  // Subscriptions
  // ===========================================================================

  /**
   * Subscription for create GoodsList
   */
  @Subscription(() => GoodsList, {
    filter(this: GoodsListResolver, payload, variables, context) {
      return context?.user?.hasRole?.(RoleEnum.ADMIN);
    },
    resolve: (value) => value,
  })
  async goodsListCreated() {
    return this.pubSub.asyncIterator('goodsListCreated');
  }
}
