import { FilterArgs, GraphQLServiceOptions, RoleEnum, ServiceOptions } from '@lenne.tech/nest-server';
import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';
import { CustomerCreateInput } from './inputs/customer-create.input';
import { CustomerInput } from './inputs/customer.input';
import { FindAndCountCustomersResult } from './outputs/find-and-count-customers-result.output';

/**
 * Resolver to process with Customer data
 */
@Resolver(() => Customer)
export class CustomerResolver {
  /**
   * Import services
   */
  constructor(
    private readonly customerService: CustomerService,
    @Inject('PUB_SUB') protected readonly pubSub: PubSub
  ) {}

  // ===========================================================================
  // Queries
  // ===========================================================================

  /**
   * Get and total count Customers (via filter)
   */
  @Query(() => FindAndCountCustomersResult, { description: 'Find Customers (via filter)' })
  async findAndCountCustomers(
    @GraphQLServiceOptions({ gqlPath: 'findAndCountCustomers.items' }) serviceOptions: ServiceOptions,
    @Args() args?: FilterArgs
  ) {
    return await this.customerService.findAndCount(args, {
      ...serviceOptions,
      inputType: FilterArgs,
    });
  }

  /**
   * Get Customers (via filter)
   */
  @Query(() => [Customer], { description: 'Find Customers (via filter)' })
  async findCustomers(@GraphQLServiceOptions() serviceOptions: ServiceOptions, @Args() args?: FilterArgs) {
    return await this.customerService.find(args, {
      ...serviceOptions,
      inputType: FilterArgs,
    });
  }

  /**
   * Get Customer via ID
   */
  @Query(() => Customer, { description: 'Get Customer with specified ID' })
  async getCustomer(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('id') id: string
  ): Promise<Customer> {
    return await this.customerService.get(id, serviceOptions);
  }

  // ===========================================================================
  // Mutations
  // ===========================================================================

  /**
   * Create new Customer
   */
  @Mutation(() => Customer, { description: 'Create a new Customer' })
  async createCustomer(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('input') input: CustomerCreateInput
  ): Promise<Customer> {
    return await this.customerService.create(input, {
      ...serviceOptions,
      inputType: CustomerCreateInput,
    });
  }

  /**
   * Delete existing Customer
   */
  @Mutation(() => Customer, { description: 'Delete existing Customer' })
  async deleteCustomer(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('id') id: string
  ): Promise<Customer> {
    return await this.customerService.delete(id, {
      ...serviceOptions,
      roles: [RoleEnum.ADMIN, RoleEnum.S_CREATOR],
    });
  }

  /**
   * Update existing Customer
   */
  @Mutation(() => Customer, { description: 'Update existing Customer' })
  async updateCustomer(
    @GraphQLServiceOptions() serviceOptions: ServiceOptions,
    @Args('id') id: string,
    @Args('input') input: CustomerInput
  ): Promise<Customer> {
    return await this.customerService.update(id, input, {
      serviceOptions,
      inputType: CustomerInput,
      roles: [RoleEnum.ADMIN, RoleEnum.S_CREATOR],
    });
  }

  // ===========================================================================
  // Subscriptions
  // ===========================================================================

  /**
   * Subscription for create Customer
   */
  @Subscription(() => Customer, {
    filter(this: CustomerResolver, payload, variables, context) {
      return context?.user?.hasRole?.(RoleEnum.ADMIN);
    },
    resolve: (value) => value,
  })
  async customerCreated() {
    return this.pubSub.asyncIterator('customerCreated');
  }
}
