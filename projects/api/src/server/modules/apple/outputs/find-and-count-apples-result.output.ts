import { Field, ObjectType } from '@nestjs/graphql';
import { Apple } from '../apple.model';

@ObjectType({ description: 'Result of find and count Apples' })
export class FindAndCountApplesResult {
  @Field(() => [Apple], { description: 'Found Apples' })
  items: Apple[];

  @Field({ description: 'Total count (skip/offset and limit/take are ignored in the count)' })
  totalCount: number;
}
