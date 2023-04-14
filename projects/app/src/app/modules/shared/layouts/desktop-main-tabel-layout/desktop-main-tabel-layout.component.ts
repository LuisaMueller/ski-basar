import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Good } from '../../../core/models/good.model';
import { ApiService } from '../../../core/services/api.service';
import { DeleteTableModalComponent } from '../delete-table-modal/delete-table-modal.component';
import { UpdateTableModalComponent } from '../update-table-modal/update-table-modal.component';
@Component({
  selector: 'app-desktop-main-tabel-layout',
  templateUrl: './desktop-main-tabel-layout.component.html',
  styleUrls: ['./desktop-main-tabel-layout.component.scss'],
})
export class DesktopMainTabelLayoutComponent implements OnInit {
  goodList: Good[] = [];
  archivedGoods: Good[] = [];
  submitForm: FormGroup;
  charArray: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'AA',
    'AB',
    'AC',
    'AD',
    'AE',
    'AF',
    'AG',
    'AH',
    'AJ',
    'AK',
    'AL',
    'AM',
    'AN',
    'AP',
    'AQ',
    'AR',
    'AS',
    'AT',
    'AU',
    'AV',
    'AW',
    'AX',
    'AY',
    'AZ',
  ];
  defaultNr: number = 1;
  fee: number = 0;
  deletionHint: string = '';
  customerName: string = '';
  classificationList: string[] = ['Ski', 'Skitasche', 'Skischuhe', 'Schal/Neckwarmer', 'Weste'];
  brandList: string[] = ['Areco', 'Dynastar', 'Fischer', 'K2', 'Ziener'];
  sizeList: string[] = ['MP15.0/EU24.5', 'MP21.0/EU33.5', 'MP31.5/EU49.0'];

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.route.params.subscribe((value: any) => {
      this.defaultNr = +value.id;
      this.apiService.findList(this.defaultNr).subscribe(value1 => {
        console.log(value1);
        this.goodList = value1;
      });
    });
    this.submitForm = new FormGroup({
      classification: new FormControl(null, Validators.required),
      brand: new FormControl(null, Validators.required),
      size: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required),
      other: new FormControl(null),
      max: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^(?:[1-9]{1}[0-9]*)(?:,[0-9]{1,2})?$'),
      ]),
      min: new FormControl(null, [Validators.pattern('^(?:[1-9]{1}[0-9]*)(?:,[0-9]{1,2})?$')]),
      cash: new FormControl(null, [Validators.pattern('^(?:[1-9]{1}[0-9]*)(?:,[0-9]{1,2})?$')]),
    });
  }
  // find() {
  //   this.apiService.findGoodsLists().subscribe(value => {
  //     console.log(value);
  //     this.goodList = value;
  //   });
  // }

  getRow(index: number) {
    return this.charArray[index];
  }

  editRow(good: Good, index: number) {
    const modalRef = this.modalService.open(UpdateTableModalComponent, { backdrop: 'static' });
    modalRef.componentInstance.content = good;
    modalRef.result.then(result => {
      this.goodList[index] = result;
      this.archivedGoods[index] = result;
    });
  }

  deleteRow(good: Good, index: number) {
    const modalRef = this.modalService.open(DeleteTableModalComponent);
    modalRef.componentInstance.content = good;
    modalRef.result.then(result => {
      if (result === 'delete') {
        const deleteIndex = this.goodList.indexOf(good);
        if (index > -1) {
          this.goodList.splice(deleteIndex, 1);
        }
        if (this.deletionHint === '') {
          this.deletionHint = good.number;
        } else this.deletionHint = this.deletionHint + ', ' + good.number;
      }
    });
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
    const input = { ...this.submitForm.value, number: this.defaultNr + '-' + this.getRow(this.archivedGoods.length) };
    this.archivedGoods = [...this.archivedGoods, input];
    this.goodList = [...this.goodList, input];

    const regex = new RegExp('^(?:[5-9]{1}|[1-9]{1}[0-9]+)(?:.[0-9]{1,2})?$');
    if (regex.test(input.max)) {
      this.fee = this.fee + 1;
    }
    this.submitForm.reset();
    console.log(document.body.scrollHeight);

    this.document.getElementById('footer')!.scrollIntoView({ block: 'start' });
  }

  navPrevNext(goodListNr: number) {
    this.router.navigate(['auth/main-desktop/' + goodListNr]);
  }

  navTo(event: any) {
    this.router.navigate(['auth/main-desktop/' + event.target.value]);
    event.target.value = '';
  }
}
