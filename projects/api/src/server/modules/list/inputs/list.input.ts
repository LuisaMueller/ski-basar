import { CoreInput, Restricted, RoleEnum } from '@lenne.tech/nest-server';
import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { TableItemInput } from './table-item.input';

/**
 * List input
 */
@Restricted(RoleEnum.ADMIN)
@InputType({ description: 'Input data to update an existing List' })
export class ListInput extends CoreInput {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  /**
   * Number of List
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => Number, {
    description: 'Number of List',
    nullable: true,
  })
  @IsOptional()
  number?: number = undefined;

  /**
   * TableItems of List
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => [TableItemInput], {
    description: 'TableItems of List',
    nullable: true,
  })
  @IsOptional()
  tableItems?: TableItemInput[] = undefined;

  // /**
  //  * CreatedById of List
  //  */
  // @Restricted(RoleEnum.S_EVERYONE)
  // @Field(() => String, {
  //   description: 'CreatedById of List',
  //   nullable: true,
  // })
  // @IsOptional()
  // createdBy?: string = undefined;

  /**
   * EditorId of List
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'EditorId of List',
    nullable: true,
  })
  @IsOptional()
  editor?: string = undefined;

  /**
   * Note of List
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Note of List',
    nullable: true,
  })
  @IsOptional()
  note?: string = undefined;

  /**
   * Fee of List
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Fee of List',
    nullable: true,
  })
  @IsOptional()
  fee?: string = undefined;
}
