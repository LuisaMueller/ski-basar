import { assignPlain, ConfigService, CrudService, ServiceOptions } from '@lenne.tech/nest-server';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PubSub } from 'graphql-subscriptions';
import { Model } from 'mongoose';
import { Customer, CustomerDocument } from './customer.model';
import { CustomerCreateInput } from './inputs/customer-create.input';
import { CustomerInput } from './inputs/customer.input';

/**
 * Customer service
 */
@Injectable()
export class CustomerService extends CrudService<Customer, CustomerCreateInput, CustomerInput> {
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
    @InjectModel('Customer') protected readonly customerModel: Model<CustomerDocument>,
    @Inject('PUB_SUB') protected readonly pubSub: PubSub
  ) {
    super({ configService: configService, mainDbModel: customerModel, mainModelConstructor: Customer });
  }

  // ===================================================================================================================
  // Methods
  // ===================================================================================================================

  /**
   * Create new Customer
   * Overwrites create method from CrudService
   */
  override async create(input: CustomerCreateInput, serviceOptions?: ServiceOptions): Promise<Customer> {
    // Get new Customer
    const createdCustomer = await super.create(input, serviceOptions);

    // Inform subscriber
    if (serviceOptions?.pubSub === undefined || serviceOptions.pubSub) {
      await this.pubSub.publish('customerCreated', Customer.map(createdCustomer));
    }

    // Return created Customer
    return createdCustomer;
  }

  /**
   * Example method
   * Extends the CrudService
   */
  async exampleMethode(id: string, input: Record<string, any>, serviceOptions?: ServiceOptions): Promise<Customer> {
    // Get and check Customer
    const customer = await this.mainDbModel.findById(id).exec();
    if (!customer) {
      throw new NotFoundException(`Customer not found with ID: ${id}`);
    }

    // Process input and output
    return await this.process(
      async (data) => {
        // Update, save and return Customer
        return await assignPlain(customer, data.input).save();
      },
      { input, serviceOptions }
    );
  }
}
