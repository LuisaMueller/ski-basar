import { Field, InputType } from '@nestjs/graphql';
import { CustomerInput } from './customer.input';

/**
 * Customer create input
 */
@InputType({ description: 'Input data to create a new Customer' })
export class CustomerCreateInput extends CustomerInput {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  /**
   * FirstName of Customer
   */
  @Field(() => String, {
    description: 'FirstName of Customer',
    nullable: false,
  })
  override firstName: string = undefined;

  /**
   * LastName of Customer
   */
  @Field(() => String, {
    description: 'LastName of Customer',
    nullable: false,
  })
  override lastName: string = undefined;

  /**
   * Street of Customer
   */
  @Field(() => String, {
    description: 'Street of Customer',
    nullable: false,
  })
  override street: string = undefined;

  /**
   * Postcode of Customer
   */
  @Field(() => String, {
    description: 'Postcode of Customer',
    nullable: false,
  })
  override postcode: string = undefined;

  /**
   * Phonenumber of Customer
   */
  @Field(() => String, {
    description: 'Phonenumber of Customer',
    nullable: false,
  })
  override phonenumber: string = undefined;

  /**
   * Email of Customer
   */
  @Field(() => String, {
    description: 'Email of Customer',
    nullable: false,
  })
  override email: string = undefined;

  /**
   * IsHelper of Customer
   */
  @Field(() => Boolean, {
    description: 'IsHelper of Customer',
    nullable: false,
  })
  override isHelper: boolean = undefined;
}
