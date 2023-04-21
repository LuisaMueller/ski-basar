import { Field, ObjectType } from '@nestjs/graphql';
import { Schema as MongooseSchema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

/**
 * Customer model
 */
@ObjectType({ description: 'Customer' })
@MongooseSchema({ timestamps: true })
export class Customer {
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
  @Prop()
  firstName: string = undefined;

  /**
   * LastName of Customer
   */
  @Field(() => String, {
    description: 'LastName of Customer',
    nullable: false,
  })
  @Prop()
  lastName: string = undefined;

  /**
   * Street of Customer
   */
  @Field(() => String, {
    description: 'Street of Customer',
    nullable: false,
  })
  @Prop()
  street: string = undefined;

  /**
   * Postcode of Customer
   */
  @Field(() => String, {
    description: 'Postcode of Customer',
    nullable: false,
  })
  @Prop()
  postcode: string = undefined;

  /**
   * Phonenumber of Customer
   */
  @Field(() => String, {
    description: 'Phonenumber of Customer',
    nullable: false,
  })
  @Prop()
  phonenumber: string = undefined;

  /**
   * Email of Customer
   */
  @Field(() => String, {
    description: 'Email of Customer',
    nullable: false,
  })
  @Prop()
  email: string = undefined;

  /**
   * IsHelper of Customer
   */
  @Field(() => Boolean, {
    description: 'IsHelper of Customer',
    nullable: false,
  })
  @Prop()
  isHelper: boolean = undefined;

  // ===================================================================================================================
  // Methods
  // ===================================================================================================================

  /**
   * Initialize instance with default values instead of undefined
   */
  // override init() {
  //   super.init();
  //   // this.xxx = [];
  //   return this;
  // }

  // /**
  //  * Map input
  //  *
  //  * Hint: Non-primitive variables should always be mapped (see mapClasses / mapClassesAsync in ModelHelper)
  //  */
  // override map(input) {
  //   super.map(input);
  //   return this;
  // }

  // /**
  //  * Verification of the user's rights to access the properties of this object
  //  *
  //  * Check roles, prepare or remove properties
  //  * Return undefined if the whole object should not be returned or throw an exception to stop the whole request
  //  */
  // override securityCheck(user: User, force?: boolean) {
  //   // In force mode or for admins everything is allowed
  //   // if (force || user?.hasRole(RoleEnum.ADMIN)) {
  //   //   return this;
  //   // }

  //   // Usually only the creator has access to the object
  //   // if (!equalIds(user, this.createdBy)) {
  //   //   return undefined;
  //   // }

  // Check permissions for properties of this object and return the object afterwards
  //   return this;
  // }
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
