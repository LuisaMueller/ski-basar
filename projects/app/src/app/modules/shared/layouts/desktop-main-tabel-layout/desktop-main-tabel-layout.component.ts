import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-desktop-main-tabel-layout',
  templateUrl: './desktop-main-tabel-layout.component.html',
  styleUrls: ['./desktop-main-tabel-layout.component.scss'],
})
export class DesktopMainTabelLayoutComponent {
  goodList: any = [];
  submitForm: FormGroup;
  defaultNr: number = 1;
  dataList: string[] = ['Ski', 'Skitasche', 'Skischuhe', 'Schal/Neckwarmer', 'Weste'];
  labelList: string[] = ['Areco', 'Dynastar', 'Fischer', 'K2', 'Ziener'];
  sizeList: string[] = ['MP15.0/EU24.5', 'MP21.0/EU33.5', 'MP31.5/EU49.0'];

  constructor() {}

  ngOnInit() {
    this.submitForm = new FormGroup({
      data: new FormControl(null, Validators.required),
      label: new FormControl(null, Validators.required),
      size: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required),
      other: new FormControl(null),
      max: new FormControl(null, [Validators.required, Validators.min(1)]),
      min: new FormControl(null),
      cash: new FormControl(null),
    });
  }
  // find() {
  //   this.apiService.findGoodsLists().subscribe(value => {
  //     console.log(value);
  //     this.goodList = value;
  //   });
  // }

  getRow(index: number) {
    if (index <= 23) {
      if (index >= 8) {
        index++;
      }
      if (index >= 14) {
        index++;
      }
      return String.fromCharCode(97 + index).toUpperCase();
    } else {
      index = index - 24;
      if (index >= 8) {
        index++;
      }
      if (index >= 14) {
        index++;
      }
      return String.fromCharCode(97 + index).toUpperCase() + String.fromCharCode(97 + index).toUpperCase();
    }
  }

  // onSubmit() {
  //   const input = { ...this.submitForm.value, number: '170' };
  //   this.apiService.createGoodsList(input).subscribe(
  //     value => {
  //       console.log(value);
  //       this.goodList = [...this.goodList, value];
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  //   this.submitForm.reset();
  // }

  add() {
    const input = { ...this.submitForm.value, number: this.defaultNr };

    this.goodList = [...this.goodList, input];
    this.submitForm.reset();
  }
}
