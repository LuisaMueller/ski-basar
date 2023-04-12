import { CoreInput, Restricted, RoleEnum } from '@lenne.tech/nest-server';
import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

/**
 * Apple input
 */
@Restricted(RoleEnum.ADMIN)
@InputType({ description: 'Input data to update an existing Apple' })
export class AppleInput extends CoreInput {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  /**
   * Size of Apple
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Size of Apple',
    nullable: true,
  })
  @IsOptional()
  size?: string = undefined;

  /**
   * Color of Apple
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Color of Apple',
    nullable: true,
  })
  @IsOptional()
  color?: string = undefined;

  /**
   * IsRipe of Apple
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => Boolean, {
    description: 'IsRipe of Apple',
    nullable: true,
  })
  @IsOptional()
  isRipe?: boolean = undefined;
}
