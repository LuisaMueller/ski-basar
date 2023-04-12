import { CoreInput, Restricted, RoleEnum } from '@lenne.tech/nest-server';
import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

/**
 * List input
 */
@Restricted(RoleEnum.ADMIN)
@InputType({ description: 'Input data to update an existing TableItem' })
export class TableItemInput extends CoreInput {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  /**
   * Number of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Number of TableItem',
    nullable: true,
  })
  @IsOptional()
  number?: string = undefined;

  /**
   * classification of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Classification of TableItem',
    nullable: true,
  })
  @IsOptional()
  classification?: string = undefined;

  /**
   * brand of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Brand of TableItem',
    nullable: true,
  })
  @IsOptional()
  brand?: string = undefined;

  /**
   * size of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Size of TableItem',
    nullable: true,
  })
  @IsOptional()
  size?: string = undefined;

  /**
   * color of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Color of TableItem',
    nullable: true,
  })
  @IsOptional()
  color?: string = undefined;

  /**
   * other of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Other of TableItem',
    nullable: true,
  })
  @IsOptional()
  other?: string = undefined;

  /**
   * prize of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Prize of TableItem',
    nullable: true,
  })
  @IsOptional()
  prize?: string = undefined;

  /**
   * vb of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'VB of TableItem',
    nullable: true,
  })
  @IsOptional()
  vb?: string = undefined;

  /**
   * cash of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Cash of TableItem',
    nullable: true,
  })
  @IsOptional()
  cash?: string = undefined;
}
