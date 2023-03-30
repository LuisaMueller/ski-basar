import { Injectable } from '@angular/core';
import { ComparisonOperatorEnum, FindArgs, GraphQLPlusService, GraphQLRequestType } from '@lenne.tech/ng-base/shared';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends GraphQLPlusService {
  createGoodsList(input: any) {
    return this.graphQl('createGoodsList', {
      arguments: { input },
      fields: ['id', 'number', 'classification', 'brand', 'size', 'color', 'extra', 'maxPrize', 'minPrize'],
      type: GraphQLRequestType.MUTATION,
    });
  }

  getGoodsList() {
    return this.graphQl('getGoodsList', {
      arguments: { id: '6423f4d8903547fbe47ab6b5' },
      fields: ['classification'],
      type: GraphQLRequestType.QUERY,
    });
  }

  findGoodsLists() {
    const filter: FindArgs = {
      filter: {
        singleFilter: {
          field: 'id',
          operator: ComparisonOperatorEnum.EQ,
          not: true,
          value: '',
        },
      },
    };
    return this.graphQl('findGoodsLists', {
      arguments: filter,
      fields: ['id', 'number', 'classification', 'brand', 'size', 'color', 'extra', 'maxPrize', 'minPrize'],
      type: GraphQLRequestType.QUERY,
    });
  }

  onGoodsListCreated() {
    console.log('subscription frontend');
    return this.graphQl('goodsListCreated', {
      fields: ['id', 'number', 'classification', 'brand', 'size', 'color', 'extra', 'maxPrize', 'minPrize'],
      type: GraphQLRequestType.SUBSCRIPTION,
    });
  }
}
