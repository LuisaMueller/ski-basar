import { CoreInput } from '@lenne.tech/nest-server';
import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

/**
 * Customer input
 */
@InputType({ description: 'Input data to update an existing Customer' })
export class CustomerInput extends CoreInput {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  /**
   * FirstName of Customer
   */
  @Field(() => String, {
    description: 'FirstName of Customer',
    nullable: true,
  })
  @IsOptional()
  firstName?: string = undefined;

  /**
   * LastName of Customer
   */
  @Field(() => String, {
    description: 'LastName of Customer',
    nullable: true,
  })
  @IsOptional()
  lastName?: string = undefined;

  /**
   * Street of Customer
   */
  @Field(() => String, {
    description: 'Street of Customer',
    nullable: true,
  })
  @IsOptional()
  street?: string = undefined;

  /**
   * Postcode of Customer
   */
  @Field(() => String, {
    description: 'Postcode of Customer',
    nullable: true,
  })
  @IsOptional()
  postcode?: string = undefined;

  /**
   * Phonenumber of Customer
   */
  @Field(() => String, {
    description: 'Phonenumber of Customer',
    nullable: true,
  })
  @IsOptional()
  phonenumber?: string = undefined;

  /**
   * Email of Customer
   */
  @Field(() => String, {
    description: 'Email of Customer',
    nullable: true,
  })
  @IsOptional()
  email?: string = undefined;

  /**
   * IsHelper of Customer
   */
  @Field(() => Boolean, {
    description: 'IsHelper of Customer',
    nullable: true,
  })
  @IsOptional()
  isHelper?: boolean = undefined;
}
