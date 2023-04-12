import { FilterArgs, GraphQLServiceOptions, RoleEnum, Roles, ServiceOptions } from '@lenne.tech/nest-server';
import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { AppleCreateInput } from './inputs/apple-create.input';
import { AppleInput } from './inputs/apple.input';
import { FindAndCountApplesResult } from './outputs/find-and-count-apples-result.output';
import { Apple } from './apple.model';
import { AppleService } from './apple.service';

/**
 * Resolver to process with Apple data
 */
@Roles(RoleEnum.ADMIN)
@Resolver(() => Apple)
export class AppleResolver {
  /**
   * Import services
   */
  constructor(private readonly appleService: AppleService, @Inject('PUB_SUB') protected readonly pubSub: PubSub) {}

  // ===========================================================================
  // Queries
  // ===========================================================================

  /**
   * Get and total count Apples (via filter)
   */
  @Roles(RoleEnum.S_USER)
  @Query(() => FindAndCountApplesResult, { description: 'Find Apples (via filter)' })
  async findAndCountApples(
    @GraphQLServiceOptions({ gqlPath: 'findAndCountApples.items' }) serviceOptions: ServiceOptions,
    @Args() args?: FilterArgs
  ) {
    return await this.appleService.findAndCount(args, {
      ...serviceOptions,
      inputType: FilterArgs,
    });
  }

  /**
   * Get Apples (via filter)
   */
  @Roles(RoleEnum.S_USER)
  @Query(() => [Apple], { description: 'Find Apples (via filter)' })
  async findApples(@GraphQLServiceOptions() serviceOptions: ServiceOptions, @Args() args?: FilterArgs) {
    return await this.appleService.find(args, {
      ...serviceOptions,
      inputType: FilterArgs,
    });
  }

  /**
   * Get Apple via ID
   */
  @Roles(RoleEnum.S_USER)
  @Query(() => Apple, { description: 'Get Apple with specified ID' })
  async getApple(@GraphQLServiceOptions() serviceOptions: ServiceOptions, @Args('id') id: string): Promise<Apple> {
    return await this.appleService.get(id, serviceOptions);
  }

  // ===========================================================================
  // Mutations
  // ===========================================================================

  /**
   * Create new Apple
   */
  @Roles(RoleEnum.S_USER)
  @Mutation(() => Apple, { description: 'Create a new Apple' })
  async createApple(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('input') input: AppleCreateInput
  ): Promise<Apple> {
    return await this.appleService.create(input, {
      ...serviceOptions,
      inputType: AppleCreateInput,
    });
  }

  /**
   * Delete existing Apple
   */
  @Roles(RoleEnum.S_USER)
  @Mutation(() => Apple, { description: 'Delete existing Apple' })
  async deleteApple(@GraphQLServiceOptions() serviceOptions: ServiceOptions, @Args('id') id: string): Promise<Apple> {
    return await this.appleService.delete(id, {
      ...serviceOptions,
      roles: [RoleEnum.ADMIN, RoleEnum.S_CREATOR],
    });
  }

  /**
   * Update existing Apple
   */
  @Roles(RoleEnum.S_USER)
  @Mutation(() => Apple, { description: 'Update existing Apple' })
  async updateApple(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('id') id: string,
    @Args('input') input: AppleInput
  ): Promise<Apple> {
    return await this.appleService.update(id, input, {
      serviceOptions,
      inputType: AppleInput,
      roles: [RoleEnum.ADMIN, RoleEnum.S_CREATOR],
    });
  }

  // ===========================================================================
  // Subscriptions
  // ===========================================================================

  /**
   * Subscription for create Apple
   */
  @Subscription(() => Apple, {
    filter(this: AppleResolver, payload, variables, context) {
      return context?.user?.hasRole?.(RoleEnum.ADMIN);
    },
    resolve: (value) => value,
  })
  async appleCreated() {
    return this.pubSub.asyncIterator('appleCreated');
  }
}
