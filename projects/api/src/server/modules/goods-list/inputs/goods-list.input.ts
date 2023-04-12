import { CoreInput, Restricted, RoleEnum } from '@lenne.tech/nest-server';
import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

/**
 * GoodsList input
 */
// @Restricted(RoleEnum.ADMIN)
@InputType({ description: 'Input data to update an existing GoodsList' })
export class GoodsListInput extends CoreInput {
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
  @IsOptional()
  classification?: string = undefined;

  /**
   * Brand of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Brand of GoodsList',
    nullable: true,
  })
  @IsOptional()
  brand?: string = undefined;

  /**
   * Size of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Size of GoodsList',
    nullable: true,
  })
  @IsOptional()
  size?: string = undefined;

  /**
   * Color of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Color of GoodsList',
    nullable: true,
  })
  @IsOptional()
  color?: string = undefined;

  /**
   * Extra of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Extra of GoodsList',
    nullable: true,
  })
  @IsOptional()
  extra?: string = undefined;

  /**
   * MaxPrize of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => Number, {
    description: 'MaxPrize of GoodsList',
    nullable: true,
  })
  @IsOptional()
  maxPrize?: number = undefined;

  /**
   * MinPrize of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => Number, {
    description: 'MinPrize of GoodsList',
    nullable: true,
  })
  @IsOptional()
  minPrize?: number = undefined;

  /**
   * Number of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Number of GoodsList',
    nullable: true,
  })
  @IsOptional()
  number?: string = undefined;
}
