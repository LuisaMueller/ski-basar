import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Good } from '../../../core/models/good.model';
import { UpdateTableModalComponent } from '../update-table-modal/update-table-modal.component';
@Component({
  selector: 'app-desktop-main-tabel-layout',
  templateUrl: './desktop-main-tabel-layout.component.html',
  styleUrls: ['./desktop-main-tabel-layout.component.scss'],
})
export class DesktopMainTabelLayoutComponent implements OnInit {
  goodList: Good[] = [];
  submitForm: FormGroup;
  defaultNr: number = 1;
  classificationList: string[] = ['Ski', 'Skitasche', 'Skischuhe', 'Schal/Neckwarmer', 'Weste'];
  brandList: string[] = ['Areco', 'Dynastar', 'Fischer', 'K2', 'Ziener'];
  sizeList: string[] = ['MP15.0/EU24.5', 'MP21.0/EU33.5', 'MP31.5/EU49.0'];

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.submitForm = new FormGroup({
      classification: new FormControl(null, Validators.required),
      brand: new FormControl(null, Validators.required),
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
      //run from A to Z
      if (index >= 8) {
        //I has index 8 and should be skipped
        index++;
      }
      if (index >= 14) {
        //O has index 14 and should be skipped
        index++;
      }
      return String.fromCharCode(97 + index).toUpperCase();
    } else {
      if (index <= 47) {
        //run from AA to AZ
        index = index - 24;
        if (index >= 8) {
          //I has index 8 and should be skipped
          index++;
        }
        if (index >= 14) {
          //O has index 14 and should be skipped
          index++;
        }
        return 'A' + String.fromCharCode(97 + index).toUpperCase();
      } else {
        //run from BA to BZ and after that something like B{
        index = index - 48;
        if (index >= 8) {
          //I has index 8 and should be skipped
          index++;
        }
        if (index >= 14) {
          //O has index 14 and should be skipped
          index++;
        }
        return 'B' + String.fromCharCode(97 + index).toUpperCase();
      }
    }
  }

  editRow(good: Good, index: number) {
    const modalRef = this.modalService.open(UpdateTableModalComponent, { backdrop: 'static' });
    modalRef.componentInstance.content = good;
    modalRef.result.then(result => {
      this.goodList[index] = result;
    });
  }

  deleteRow(index: number) {
    if (confirm('Möchtest du diese Zeile wirklich löschen?\n\nOK = Löschen') == true) {
      console.log('gelöscht');
    } else {
      //confirm is chancelled
    }

    return index;
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
    const input = { ...this.submitForm.value, number: this.defaultNr + '-' + this.getRow(this.goodList.length) };

    this.goodList = [...this.goodList, input];
    this.submitForm.reset();
  }
}
