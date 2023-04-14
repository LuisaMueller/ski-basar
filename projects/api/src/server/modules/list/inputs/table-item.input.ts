import { CoreInput } from '@lenne.tech/nest-server';
import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

/**
 * List input
 */

@InputType({ description: 'Input data to update an existing TableItem' })
export class TableItemInput extends CoreInput {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  /**
   * Number of TableItem
   */
  @Field(() => String, {
    description: 'Number of TableItem',
    nullable: true,
  })
  @IsOptional()
  number?: string = undefined;

  /**
   * classification of TableItem
   */
  @Field(() => String, {
    description: 'Classification of TableItem',
    nullable: true,
  })
  @IsOptional()
  classification?: string = undefined;

  /**
   * brand of TableItem
   */
  @Field(() => String, {
    description: 'Brand of TableItem',
    nullable: true,
  })
  @IsOptional()
  brand?: string = undefined;

  /**
   * size of TableItem
   */
  @Field(() => String, {
    description: 'Size of TableItem',
    nullable: true,
  })
  @IsOptional()
  size?: string = undefined;

  /**
   * color of TableItem
   */
  @Field(() => String, {
    description: 'Color of TableItem',
    nullable: true,
  })
  @IsOptional()
  color?: string = undefined;

  /**
   * other of TableItem
   */
  @Field(() => String, {
    description: 'Other of TableItem',
    nullable: true,
  })
  @IsOptional()
  other?: string = undefined;

  /**
   * prize of TableItem
   */
  @Field(() => String, {
    description: 'Prize of TableItem',
    nullable: true,
  })
  @IsOptional()
  prize?: string = undefined;

  /**
   * vb of TableItem
   */
  @Field(() => String, {
    description: 'VB of TableItem',
    nullable: true,
  })
  @IsOptional()
  vb?: string = undefined;

  /**
   * cash of TableItem
   */
  @Field(() => String, {
    description: 'Cash of TableItem',
    nullable: true,
  })
  @IsOptional()
  cash?: string = undefined;
}
