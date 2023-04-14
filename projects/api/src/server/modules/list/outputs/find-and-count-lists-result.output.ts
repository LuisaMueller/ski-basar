import { Field, ObjectType } from '@nestjs/graphql';
import { List } from '../list.model';

@ObjectType({ description: 'Result of find and count Lists' })
export class FindAndCountListsResult {
  @Field(() => [List], { description: 'Found Lists' })
  items: List[];

  @Field({ description: 'Total count (skip/offset and limit/take are ignored in the count)' })
  totalCount: number;
}
