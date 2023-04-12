import { Field, ObjectType } from '@nestjs/graphql';
import { Customer } from '../customer.model';

@ObjectType({ description: 'Result of find and count Customers' })
export class FindAndCountCustomersResult {
  @Field(() => [Customer], { description: 'Found Customers' })
  items: Customer[];

  @Field({ description: 'Total count (skip/offset and limit/take are ignored in the count)' })
  totalCount: number;
}
