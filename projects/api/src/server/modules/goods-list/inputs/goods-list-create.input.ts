import { Restricted, RoleEnum } from '@lenne.tech/nest-server';
import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { GoodsListInput } from './goods-list.input';

/**
 * GoodsList create input
 */
@Restricted(RoleEnum.ADMIN)
@InputType({ description: 'Input data to create a new GoodsList' })
export class GoodsListCreateInput extends GoodsListInput {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  /**
   * Type of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Type of GoodsList',
    nullable: false,
  })
  override type: string = undefined;

  /**
   * Brand of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Brand of GoodsList',
    nullable: false,
  })
  override brand: string = undefined;

  /**
   * Size of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Size of GoodsList',
    nullable: false,
  })
  override size: string = undefined;

  /**
   * Color of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Color of GoodsList',
    nullable: false,
  })
  override color: string = undefined;

  /**
   * Extra of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Extra of GoodsList',
    nullable: false,
  })
  override extra: string = undefined;

  /**
   * MaxPrize of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => Number, {
    description: 'MaxPrize of GoodsList',
    nullable: false,
  })
  override maxPrize: number = undefined;

  /**
   * MinPrize of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => Number, {
    description: 'MinPrize of GoodsList',
    nullable: false,
  })
  override minPrize: number = undefined;

  /**
   * Number of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Number of GoodsList',
    nullable: false,
  })
  override number: string = undefined;
}
