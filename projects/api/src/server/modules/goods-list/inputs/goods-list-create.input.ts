import { Restricted, RoleEnum } from '@lenne.tech/nest-server';
import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { GoodsListInput } from './goods-list.input';

/**
 * GoodsList create input
 */
// @Restricted(RoleEnum.ADMIN)
@InputType({ description: 'Input data to create a new GoodsList' })
export class GoodsListCreateInput extends GoodsListInput {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  /**
   * Classification of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Classification of GoodsList',
    nullable: true,
  })
  override classification: string = undefined;

  /**
   * Brand of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Brand of GoodsList',
    nullable: true,
  })
  override brand: string = undefined;

  /**
   * Size of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Size of GoodsList',
    nullable: true,
  })
  override size: string = undefined;

  /**
   * Color of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Color of GoodsList',
    nullable: true,
  })
  override color: string = undefined;

  /**
   * Extra of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Extra of GoodsList',
    nullable: true,
  })
  override extra: string = undefined;

  /**
   * MaxPrize of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => Number, {
    description: 'MaxPrize of GoodsList',
    nullable: true,
  })
  override maxPrize: number = undefined;

  /**
   * MinPrize of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => Number, {
    description: 'MinPrize of GoodsList',
    nullable: true,
  })
  override minPrize: number = undefined;

  /**
   * Number of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Number of GoodsList',
    nullable: true,
  })
  override number: string = undefined;
}
