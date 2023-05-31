import { Injectable } from '@angular/core';
import { ComparisonOperatorEnum, FindArgs, GraphQLPlusService, GraphQLRequestType } from '@lenne.tech/ng-base/shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends GraphQLPlusService {
  createList(input: any) {
    return this.graphQl('createList', {
      arguments: { input },
      fields: ['id', 'number'],
      type: GraphQLRequestType.MUTATION,
    });
  }

  findList(number: number) {
    const filter: FindArgs = {
      filter: {
        singleFilter: {
          field: 'number',
          operator: ComparisonOperatorEnum.EQ,
          value: number,
        },
      },
    };
    return this.graphQl('findLists', {
      arguments: filter,
      fields: [
        'id',
        'number',
        { tableItems: ['number', 'classification', 'brand', 'size', 'color', 'other', 'prize', 'vb', 'cash'] },
        { archivedTableItems: ['number', 'classification', 'brand', 'size', 'color', 'other', 'prize', 'vb', 'cash'] },
        { deletedTableItems: ['number', 'classification', 'brand', 'size', 'color', 'other', 'prize', 'vb', 'cash'] },
        'note',
        'fee',
        // { customer: ['firstName', 'lastName'] },
        'isMailStartSend',
        'isMailEndSend',
      ],
      type: GraphQLRequestType.QUERY,
    });
  }

  findAllLists() {
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
      fields: ['id', 'number'],
      type: GraphQLRequestType.QUERY,
    });
  }

  findCustomer(number: number) {
    const filter: FindArgs = {
      filter: {
        singleFilter: {
          field: 'number',
          operator: ComparisonOperatorEnum.EQ,
          value: number,
        },
      },
    };
    return this.graphQl('findLists', {
      arguments: filter,
      fields: [{ customer: ['firstName', 'lastName', 'street', 'postcode', 'phonenumber', 'email', 'isHelper'] }],
      type: GraphQLRequestType.QUERY,
    });
  }

  updateList(id: string, input: any): Observable<any> {
    return this.graphQl('updateList', {
      arguments: { id, input },
      fields: [
        'id',
        'number',
        { tableItems: ['number', 'classification', 'brand', 'size', 'color', 'other', 'prize', 'vb', 'cash'] },
        { archivedTableItems: ['number', 'classification', 'brand', 'size', 'color', 'other', 'prize', 'vb', 'cash'] },
        { deletedTableItems: ['number', 'classification', 'brand', 'size', 'color', 'other', 'prize', 'vb', 'cash'] },
        'note',
        'fee',
        // { customer: ['firstName', 'lastName'] },
        'isMailStartSend',
        'isMailEndSend',
      ],
      type: GraphQLRequestType.MUTATION,
    });
  }

  sendMailStart(id: string, input: string) {
    return this.graphQl('sendMailStart', {
      arguments: { id, input },
      fields: ['id', 'number'],
      type: GraphQLRequestType.QUERY,
    });
  }

  sendMailEnd(id: string, input: string) {
    return this.graphQl('sendMailEnd', {
      arguments: { id, input },
      fields: ['id', 'number'],
      type: GraphQLRequestType.QUERY,
    });
  }
}
