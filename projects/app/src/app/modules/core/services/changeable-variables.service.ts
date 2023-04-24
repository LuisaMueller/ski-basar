import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeableVariablesService {
  startTime = '16:30';
  endTime = '17:30';
  pickUpDate = '10.12.2023';
}
