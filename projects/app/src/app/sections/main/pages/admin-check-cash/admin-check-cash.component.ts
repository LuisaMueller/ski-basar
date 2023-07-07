import { Component } from '@angular/core';
import { GoodsList } from '../../../../modules/core/models/goods-list.model';
import { ApiService } from '../../../../modules/core/services/api.service';

@Component({
  selector: 'app-admin-check-cash',
  templateUrl: './admin-check-cash.component.html',
  styleUrls: ['./admin-check-cash.component.scss'],
})
export class AdminCheckCashComponent {
  goodsList: GoodsList;
  feeSaturdayString: string = 'Noch nicht berechnet!';
  feeSundayString: string = 'Noch nicht berechnet!';
  feeTotalString: string = 'Noch nicht berechnet!';
  proceedsSaturdayString: string = 'Noch nicht berechnet!';
  proceedsSundayString: string = 'Noch nicht berechnet!';
  proceedsTotalString: string = 'Noch nicht berechnet!';
  feeSaturday: number = 0;
  feeSunday: number = 0;
  feeTotal: number = 0;
  proceedsSaturday: number = 0;
  proceedsSunday: number = 0;
  proceedsTotal: number = 0;

  constructor(private apiService: ApiService) {}

  calculateFeeAndProceedsSaturday() {
    this.apiService.findAllLists().subscribe(value => {
      this.proceedsSaturday = 0;
      this.feeSaturday = 0;
      for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < value[i].tableItems.length; j++) {
          const cash = value[i].tableItems[j].cash;
          if (cash !== null) {
            this.proceedsSaturday = this.proceedsSaturday + parseFloat(cash!.replace(',', '.'));
          }
        }
        this.feeSaturday = this.feeSaturday + value[i].fee;
      }

      this.proceedsSaturdayString = this.proceedsSaturday.toFixed(2).toString().replace('.', ',') + ' €';
      this.feeSaturdayString = this.feeSaturday.toFixed(2).toString().replace('.', ',') + ' €';

      //TODO: PDF erstellen
    });
  }

  calculateFeeAndProceedsTotal() {
    this.apiService.findAllLists().subscribe(value => {
      this.proceedsSunday = 0;
      this.proceedsTotal = 0;
      this.feeSunday = 0;
      this.feeTotal = 0;
      for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < value[i].tableItems.length; j++) {
          const cash = value[i].tableItems[j].cash;
          if (cash !== null) {
            this.proceedsTotal = this.proceedsTotal + parseFloat(cash!.replace(',', '.'));
          }
        }
        this.feeTotal = this.feeTotal + value[i].fee;
      }
      this.proceedsSunday = this.proceedsTotal - this.proceedsSaturday;
      this.proceedsSundayString = this.proceedsSunday.toFixed(2).toString().replace('.', ',') + ' €';
      this.feeSunday = this.feeTotal - this.feeSaturday;
      this.feeSundayString = this.feeSunday.toFixed(2).toString().replace('.', ',') + ' €';

      this.proceedsTotalString = this.proceedsTotal.toFixed(2).toString().replace('.', ',') + ' €';
      this.feeTotalString = this.feeTotal.toFixed(2).toString().replace('.', ',') + ' €';

      //TODO: PDF erstellen
    });
  }
}
