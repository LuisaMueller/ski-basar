import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../modules/core/services/api.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  goodList: any = [];
  submitForm: FormGroup;
  typeList: string[] = ['Ski', 'Skitasche', 'Skischuhe', 'Schal/Neckwarmer', 'Weste'];
  brandList: string[] = ['Areco', 'Dynastar', 'Fischer', 'K2', 'Ziener'];
  sizeList: string[] = ['MP15.0/EU24.5', 'MP21.0/EU33.5', 'MP31.5/EU49.0'];

  constructor(private apiService: ApiService, private fb: FormBuilder) {}

  async ngOnInit() {
    this.submitForm = new FormGroup({
      classification: new FormControl(null, Validators.required),
      brand: new FormControl(null, Validators.required),
      size: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required),
      extra: new FormControl(null, Validators.required),
      maxPrize: new FormControl(null, Validators.required),
      minPrize: new FormControl(null, Validators.required),
    });
    this.find();
  }

  find() {
    this.apiService.findGoodsLists().subscribe(value => {
      console.log(value);
      this.goodList = value;
    });
  }

  getRow(index: number) {
    return String.fromCharCode(97 + index).toUpperCase();
  }

  onSubmit() {
    const input = { ...this.submitForm.value, number: '170' };
    this.apiService.createGoodsList(input).subscribe(
      value => {
        console.log(value);
        this.goodList = [...this.goodList, value];
      },
      error => {
        console.log(error);
      }
    );
    this.submitForm.reset();
  }
}
