import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { CustomerInput } from './customer.input';
import { ListInput } from './list.input';
import { TableItemInput } from './table-item.input';

/**
 * List create input
 */

@InputType({ description: 'Input data to create a new List' })
export class ListCreateInput extends ListInput {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  /**
   * Number of List
   */
  @Field(() => Number, {
    description: 'Number of List',
    nullable: true,
  })
  @IsOptional()
  override number?: number = undefined;

  /**
   * TableItems of List
   */
  @Field(() => [TableItemInput], {
    description: 'TableItems of List',
    nullable: true,
  })
  @IsOptional()
  override tableItems?: TableItemInput[] = undefined;

  /**
   * ArchivedTableItems of List
   */
  @Field(() => [TableItemInput], {
    description: 'ArchivedTableItems of List',
    nullable: true,
  })
  @IsOptional()
  override archivedTableItems?: TableItemInput[] = undefined;

  /**
   * EditorId of List
   */
  @Field(() => String, {
    description: 'EditorId of List',
    nullable: true,
  })
  @IsOptional()
  override editor?: string = undefined;

  /**
   * Note of List
   */
  @Field(() => String, {
    description: 'Note of List',
    nullable: true,
  })
  @IsOptional()
  override note?: string = undefined;

  /**
   * Fee of List
   */
  @Field(() => Number, {
    description: 'Fee of List',
    nullable: true,
  })
  @IsOptional()
  override fee?: number = undefined;

  /**
   * Customer of List
   */
  @Field(() => CustomerInput, {
    description: 'Customer of List',
    nullable: false,
  })
  @IsOptional()
  override customer?: CustomerInput = undefined;
}
