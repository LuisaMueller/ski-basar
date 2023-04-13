import { Injectable } from '@angular/core';
import { ComparisonOperatorEnum, FindArgs, GraphQLPlusService, GraphQLRequestType } from '@lenne.tech/ng-base/shared';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends GraphQLPlusService {
  createList(input: any) {
    return this.graphQl('createList', {
      arguments: { input },
      fields: ['id', 'number', 'tableItems', 'editor', 'note', 'fee'],
      type: GraphQLRequestType.MUTATION,
    });
  }

  getList() {
    return this.graphQl('getList', {
      arguments: { id: '6423f4d8903547fbe47ab6b5' },
      fields: ['id', 'number', 'tableItems', 'editor', 'note', 'fee'],
      type: GraphQLRequestType.QUERY,
    });
  }

  findLists() {
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
    return this.graphQl('findLists', {
      arguments: filter,
      fields: ['id', 'number', 'tableItems', 'editor', 'note', 'fee'],
      type: GraphQLRequestType.QUERY,
    });
  }

  onListCreated() {
    console.log('subscription frontend');
    return this.graphQl('ListCreated', {
      fields: ['id', 'number', 'tableItems', 'editor', 'note', 'fee'],
      type: GraphQLRequestType.SUBSCRIPTION,
    });
  }

  createCustomer(input: any) {
    console.log(input);

    return this.graphQl('createCustomer', {
      arguments: { input },
      fields: ['id'],
      type: GraphQLRequestType.MUTATION,
    });
  }
  getCustomer() {
    return this.graphQl('getCustomer', {
      arguments: { id: '6436b5d8a93ceb7573faa970' },
      fields: ['firstName', 'lastName'],
      type: GraphQLRequestType.QUERY,
    });
  }
}
