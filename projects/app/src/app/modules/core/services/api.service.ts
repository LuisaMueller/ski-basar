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
        //FIXME: Kai fragen warum die archivedTableItems nur max. 4 Subitems returnen können
        //--> brauchen wir überhaupt alle 9 zurück? Evtl. reichen ja sogar 4, der Rest ist ja trotzdem in der Datenbank?!
        { archivedTableItems: ['number'] },
        'note',
        'fee',
        { customer: ['firstName', 'lastName'] },
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

  updateList(id: string, input: any): Observable<any> {
    return this.graphQl('updateList', {
      arguments: { id, input },
      fields: [
        'id',
        'number',
        { tableItems: ['number', 'classification', 'brand', 'size', 'color', 'other', 'prize', 'vb', 'cash'] },
        //FIXME: Kai fragen warum die archivedTableItems nur max. 4 Subitems returnen können
        //--> brauchen wir überhaupt alle 9 zurück? Evtl. reichen ja sogar 4, der Rest ist ja trotzdem in der Datenbank?!
        { archivedTableItems: ['number'] },
        'note',
        'fee',
        { customer: ['firstName', 'lastName'] },
      ],
      type: GraphQLRequestType.MUTATION,
    });
  }
}
