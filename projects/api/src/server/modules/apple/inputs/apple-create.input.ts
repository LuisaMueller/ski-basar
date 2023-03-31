import { Restricted, RoleEnum } from '@lenne.tech/nest-server';
import { Field, InputType } from '@nestjs/graphql';
import { AppleInput } from './apple.input';

/**
 * Apple create input
 */
@Restricted(RoleEnum.ADMIN)
@InputType({ description: 'Input data to create a new Apple' })
export class AppleCreateInput extends AppleInput {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  /**
   * Size of Apple
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Size of Apple',
    nullable: false,
  })
  override size: string = undefined;

  /**
   * Color of Apple
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Color of Apple',
    nullable: false,
  })
  override color: string = undefined;

  /**
   * IsRipe of Apple
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => Boolean, {
    description: 'IsRipe of Apple',
    nullable: false,
  })
  override isRipe: boolean = undefined;
}
