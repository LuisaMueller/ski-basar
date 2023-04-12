import { Field, ObjectType } from '@nestjs/graphql';
import { GoodsList } from '../goods-list.model';

@ObjectType({ description: 'Result of find and count GoodsLists' })
export class FindAndCountGoodsListsResult {
  @Field(() => [GoodsList], { description: 'Found GoodsLists' })
  items: GoodsList[];

  @Field({ description: 'Total count (skip/offset and limit/take are ignored in the count)' })
  totalCount: number;
}
