import { CoreInput } from '@lenne.tech/nest-server';
import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { CustomerInput } from './customer.input';
import { TableItemInput } from './table-item.input';

/**
 * List input
 */

@InputType({ description: 'Input data to update an existing List' })
export class ListInput extends CoreInput {
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
  number?: number = undefined;

  /**
   * TableItems of List
   */
  @Field(() => [TableItemInput], {
    description: 'TableItems of List',
    nullable: true,
  })
  @IsOptional()
  tableItems?: TableItemInput[] = undefined;

  /**
   * ArchivedTableItems of List
   */
  @Field(() => [TableItemInput], {
    description: 'ArchivedTableItems of List',
    nullable: true,
  })
  @IsOptional()
  archivedTableItems?: TableItemInput[] = undefined;

  /**
   * DeletededTableItems of List
   */
  @Field(() => [TableItemInput], {
    description: 'DeletedTableItems of List',
    nullable: true,
  })
  @IsOptional()
  deletedTableItems?: TableItemInput[] = undefined;

  /**
   * EditorId of List
   */
  @Field(() => String, {
    description: 'EditorId of List',
    nullable: true,
  })
  @IsOptional()
  editor?: string = undefined;

  /**
   * Note of List
   */
  @Field(() => String, {
    description: 'Note of List',
    nullable: true,
  })
  @IsOptional()
  note?: string = undefined;

  /**
   * Fee of List
   */
  @Field(() => Number, {
    description: 'Fee of List',
    nullable: true,
  })
  @IsOptional()
  fee?: number = undefined;

  /**
   * Customer of List
   */
  @Field(() => CustomerInput, {
    description: 'Customer of List',
    nullable: true,
  })
  @IsOptional()
  customer?: CustomerInput = undefined;

  /**
   * isMailStartSend of List
   */
  @Field(() => Boolean, {
    description: 'isMailStartSend of List',
    nullable: true,
  })
  @IsOptional()
  isMailStartSend?: boolean = undefined;

  /**
   * isMailEndSend of List
   */
  @Field(() => Boolean, {
    description: 'isMailEndSend of List',
    nullable: true,
  })
  @IsOptional()
  isMailEndSend?: boolean = undefined;
}
