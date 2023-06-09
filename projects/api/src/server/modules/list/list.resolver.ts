import { FilterArgs, GraphQLServiceOptions, RoleEnum, Roles, ServiceOptions } from '@lenne.tech/nest-server';
import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { ListCreateInput } from './inputs/list-create.input';
import { ListInput } from './inputs/list.input';
import { List } from './list.model';
import { ListService } from './list.service';
import { FindAndCountListsResult } from './outputs/find-and-count-lists-result.output';

/**
 * Resolver to process with List data
 */

@Resolver(() => List)
export class ListResolver {
  /**
   * Import services
   */
  constructor(private readonly listService: ListService, @Inject('PUB_SUB') protected readonly pubSub: PubSub) {}

  // ===========================================================================
  // Queries
  // ===========================================================================

  /**
   * Get and total count Lists (via filter)
   */
  @Roles(RoleEnum.S_USER)
  @Query(() => FindAndCountListsResult, { description: 'Find Lists (via filter)' })
  async findAndCountLists(
    @GraphQLServiceOptions({ gqlPath: 'findAndCountLists.items' }) serviceOptions: ServiceOptions,
    @Args() args?: FilterArgs
  ) {
    return await this.listService.findAndCount(args, {
      ...serviceOptions,
      inputType: FilterArgs,
    });
  }

  /**
   * Get Lists (via filter)
   */
  @Query(() => [List], { description: 'Find Lists (via filter)' })
  async findLists(@GraphQLServiceOptions() serviceOptions: ServiceOptions, @Args() args?: FilterArgs) {
    return await this.listService.find(args, {
      ...serviceOptions,
      inputType: FilterArgs,
    });
  }

  /**
   * Get List via ID
   */
  @Query(() => List, { description: 'Get List with specified ID' })
  async getList(@GraphQLServiceOptions() serviceOptions: ServiceOptions, @Args('id') id: string): Promise<List> {
    return await this.listService.get(id, serviceOptions);
  }

  /**
   * Send Mail Warenannahme zu Beginn
   */
  @Query(() => List, { description: 'Send Mail Start' })
  async sendMailStart(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('id') id: string,
    @Args('input') input: string
  ): Promise<List> {
    return await this.listService.sendMailStart(id, input, serviceOptions);
  }

  /**
   * Send Mail Warenausgabe am Ende
   */
  @Query(() => List, { description: 'Send Mail End' })
  async sendMailEnd(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('id') id: string,
    @Args('input') input: string
  ): Promise<List> {
    return await this.listService.sendMailEnd(id, input, serviceOptions);
  }

  // ===========================================================================
  // Mutations
  // ===========================================================================

  /**
   * Create new List
   */
  @Mutation(() => List, { description: 'Create a new List' })
  async createList(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('input') input: ListCreateInput
  ): Promise<List> {
    return await this.listService.create(input, {
      ...serviceOptions,
      inputType: ListCreateInput,
    });
  }

  /**
   * Delete existing List
   */
  @Roles(RoleEnum.S_USER)
  @Mutation(() => List, { description: 'Delete existing List' })
  async deleteList(@GraphQLServiceOptions() serviceOptions: ServiceOptions, @Args('id') id: string): Promise<List> {
    return await this.listService.delete(id, {
      ...serviceOptions,
      roles: [RoleEnum.ADMIN, RoleEnum.S_CREATOR],
    });
  }

  /**
   * Update existing List
   */
  @Mutation(() => List, { description: 'Update existing List' })
  async updateList(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('id') id: string,
    @Args('input') input: ListInput
  ): Promise<List> {
    return await this.listService.update(id, input, {
      serviceOptions,
      inputType: ListInput,
      //roles: [RoleEnum.ADMIN, RoleEnum.S_CREATOR],
    });
  }

  // ===========================================================================
  // Subscriptions
  // ===========================================================================

  /**
   * Subscription for create List
   */
  @Subscription(() => List, {
    filter(this: ListResolver, payload, variables, context) {
      return context?.user?.hasRole?.(RoleEnum.ADMIN);
    },
    resolve: (value) => value,
  })
  async listCreated() {
    return this.pubSub.asyncIterator('listCreated');
  }
}
