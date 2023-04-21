import { Injectable } from '@angular/core';
import { GraphQLPlusService } from '@lenne.tech/ng-base/shared';

@Injectable({
  providedIn: 'root',
})
export class ChangeableVariablesService extends GraphQLPlusService {
  startTime = '16:30';
  endTime = '17:30';
  pickUpDate = '10.12.2023';
}
