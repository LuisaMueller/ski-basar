import { Restricted, RoleEnum } from '@lenne.tech/nest-server';
import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { ListInput } from './list.input';
import { TableItemInput } from './table-item.input';

/**
 * List create input
 */
@Restricted(RoleEnum.ADMIN)
@InputType({ description: 'Input data to create a new List' })
export class ListCreateInput extends ListInput {
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
  override number?: number = undefined;

  /**
   * TableItems of List
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => [TableItemInput], {
    description: 'TableItems of List',
    nullable: true,
  })
  @IsOptional()
  override tableItems?: TableItemInput[] = undefined;

  // /**
  //  * CreatedById of List
  //  */
  // @Restricted(RoleEnum.S_EVERYONE)
  // @Field(() => String, {
  //   description: 'CreatedById of List',
  //   nullable: false,
  // })
  // override createdBy: string = undefined;

  /**
   * EditorId of List
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'EditorId of List',
    nullable: true,
  })
  @IsOptional()
  override editor?: string = undefined;

  /**
   * Note of List
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Note of List',
    nullable: true,
  })
  @IsOptional()
  override note?: string = undefined;

  /**
   * Fee of List
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Fee of List',
    nullable: true,
  })
  @IsOptional()
  override fee?: string = undefined;
}
