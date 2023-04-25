import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Good } from '../../../core/models/good.model';
import { GoodsList } from '../../../core/models/goods-list.model';
import { ApiService } from '../../../core/services/api.service';
import { ChangeableVariablesService } from '../../../core/services/changeable-variables.service';
import { PdfService } from '../../../core/services/pdf.service';
import { DeleteTableModalComponent } from '../delete-table-modal/delete-table-modal.component';
import { UpdateTableModalComponent } from '../update-table-modal/update-table-modal.component';
const pdfMakeX = require('pdfmake/build/pdfmake.js');
const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;
@Component({
  selector: 'app-desktop-main-tabel-layout',
  templateUrl: './desktop-main-tabel-layout.component.html',
  styleUrls: ['./desktop-main-tabel-layout.component.scss'],
})
export class DesktopMainTabelLayoutComponent implements OnInit {
  goodsList: GoodsList;
  customerText: string = '';
  existingNumbersList: string[] = [];
  submitForm: FormGroup;
  noteForm: FormGroup;

  deletionHint: string = '';
  loadOrErrorText: string = 'Seite lädt';
  loadOrErrorNumber: number;
  existingNumbersText: string = 'Hinweis: Bisher wurde noch keine Nummer vergeben.';

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private pdfService: PdfService,
    protected changeableVariablesService: ChangeableVariablesService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.route.params.subscribe((value: any) => {
      this.apiService.findList(+value.id).subscribe(
        value1 => {
          this.goodsList = value1[0];
          if (!this.goodsList) {
            this.loadOrErrorNumber = value.id;
            this.loadOrErrorText = 'Nummer ' + value.id + ' ist nicht vorhanden';

            this.apiService.findAllLists().subscribe(value3 => {
              if (this.existingNumbersList.length !== value3.length) {
                if (value3.length === 0) {
                  this.existingNumbersText = 'Hinweis: Bisher wurde noch keine Nummer vergeben.';
                } else this.existingNumbersText = 'Alle existenten Nummern:';

                for (let i = 0; i < value3.length; i++) {
                  this.existingNumbersList.push(value3[i].number);
                }
              }
            });
          } else {
            this.noteForm.patchValue({
              note: this.goodsList.note,
            });
          }
        },
        error => {
          console.log('sind im error');
          this.loadOrErrorNumber = value.id;
          this.loadOrErrorText = 'Nummer ' + value.id + ' nicht vorhanden';
        }
      );
      this.apiService.findCustomer(+value.id).subscribe(value2 => {
        this.customerText =
          value2[0].customer.firstName +
          ' ' +
          value2[0].customer.lastName +
          '\n' +
          value2[0].customer.street +
          '\n' +
          value2[0].customer.postcode +
          '\n' +
          'Tel.: ' +
          value2[0].customer.phonenumber +
          '\n' +
          'Mail: ' +
          value2[0].customer.email;
      });
    });
    this.submitForm = new FormGroup({
      classification: new FormControl(null, Validators.required),
      brand: new FormControl(null, Validators.required),
      size: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required),
      other: new FormControl(null),
      prize: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^(?:[1-9]{1}[0-9]*)(?:,[0-9]{1,2})?$'),
      ]),
      vb: new FormControl(null, [Validators.pattern('^(?:[1-9]{1}[0-9]*)(?:,[0-9]{1,2})?$')]),
      cash: new FormControl(null, [Validators.pattern('^(?:[1-9]{1}[0-9]*)(?:,[0-9]{1,2})?$')]),
    });
    this.noteForm = new FormGroup({
      note: new FormControl(null),
    });
  }

  saveNote() {
    const input = { ...this.noteForm.value };
    this.apiService.updateList(this.goodsList.id, { note: input.note }).subscribe(value => {
      this.goodsList = value;
    });
  }

  getRow(index: number) {
    return this.changeableVariablesService.charArray[index];
  }

  editRow(good: Good, index: number) {
    let prizeBeforeChange = good.prize;
    const modalRef = this.modalService.open(UpdateTableModalComponent, { backdrop: 'static' });
    modalRef.componentInstance.content = good;
    modalRef.result.then((result: Good) => {
      let updatedTableItems = this.goodsList.tableItems.slice();
      updatedTableItems[index] = result;
      let updatedArchivedTableItems = this.goodsList.archivedTableItems.slice();
      updatedArchivedTableItems[index] = result;

      let updatedFee = this.goodsList.fee!;
      const regex = new RegExp('^(?:[5-9]{1}|[1-9]{1}[0-9]+)(?:,[0-9]{1,2})?$');
      if (!regex.test(prizeBeforeChange) && regex.test(result.prize)) {
        updatedFee = updatedFee + 1;
      }
      if (regex.test(prizeBeforeChange) && !regex.test(result.prize)) {
        updatedFee = updatedFee - 1;
      }

      this.apiService
        .updateList(this.goodsList.id, {
          tableItems: updatedTableItems,
          archivedTableItems: updatedArchivedTableItems,
          fee: updatedFee,
        })
        .subscribe(value => {
          this.goodsList = value;
        });
    });
  }

  deleteRow(good: Good, index: number) {
    const modalRef = this.modalService.open(DeleteTableModalComponent);
    modalRef.componentInstance.content = good;
    modalRef.result.then(result => {
      if (result.delete === 'yes') {
        let updatedTableItems = this.goodsList.tableItems.slice();
        updatedTableItems.splice(index, 1);
        let updatedFee = this.goodsList.fee!;
        if (result.reason === 'editingError') {
          updatedFee = updatedFee - 1;
        }

        this.apiService
          .updateList(this.goodsList.id, {
            tableItems: updatedTableItems,
            fee: updatedFee,
          })
          .subscribe(value => {
            this.goodsList = value;
          });
        //deletionhint:
        if (this.deletionHint === '') {
          this.deletionHint = good.number;
        } else this.deletionHint = this.deletionHint + ', ' + good.number;
      }
    });
  }

  add() {
    const input = {
      ...this.submitForm.value,
      number: this.goodsList.number + '-' + this.getRow(this.goodsList.archivedTableItems!.length),
    };
    let updatedTableItems = this.goodsList.tableItems.slice();
    updatedTableItems = [...this.goodsList.tableItems, input];
    let updatedArchivedTableItems = this.goodsList.archivedTableItems.slice();
    updatedArchivedTableItems = [...this.goodsList.archivedTableItems, input];

    let updatedFee = this.goodsList.fee!;
    const regex = new RegExp('^(?:[5-9]{1}|[1-9]{1}[0-9]+)(?:,[0-9]{1,2})?$');
    if (regex.test(input.prize)) {
      updatedFee = updatedFee + 1;
    }

    this.apiService
      .updateList(this.goodsList.id, {
        tableItems: updatedTableItems,
        archivedTableItems: updatedArchivedTableItems,
        fee: updatedFee,
      })
      .subscribe(value => {
        this.goodsList = value;
      });

    this.submitForm.reset();

    this.document.getElementById('footer')!.scrollIntoView({ block: 'start' });
  }

  navPrevNext(goodListNr: number) {
    this.router.navigate(['auth/main-desktop/' + goodListNr]);
  }

  navTo(event: any) {
    this.router.navigate(['auth/main-desktop/' + event.target.value]);
    event.target.value = '';
  }

  createPdfStart() {
    const body = [['Nr', 'Art', 'Marke', 'Größe', 'Farbe', 'Sonstiges', 'Preis [€]', 'VB [€]']];
    for (let i = 0; i < this.goodsList.tableItems.length; i++) {
      const row = Object.values(this.goodsList.tableItems[i]);
      row.shift();
      row.pop();
      body.push(row);
    }

    this.pdfService.createPdfStart(this.customerText, body, this.goodsList);
  }

  createPdfEnd() {
    const body = [['Nr', 'Art', 'Marke', 'Größe', 'Farbe', 'Sonstiges', 'Preis [€]', 'VB [€]', 'Verkauft für [€]']];
    let cashValue: number = 0;
    let cashValueString: string = '';
    let provisionValueString: string = '';
    let payoutValueString: string = '';
    for (let i = 0; i < this.goodsList.tableItems.length; i++) {
      const row = Object.values(this.goodsList.tableItems[i]);
      if (row[9] !== null) {
        cashValue = cashValue + parseFloat(row[9].replace(',', '.'));
      }

      row.shift();
      body.push(row);
    }
    cashValueString = cashValue.toFixed(2).toString().replace('.', ',');
    provisionValueString = (cashValue * 0.1).toFixed(2).toString().replace('.', ',');
    payoutValueString = (cashValue * 0.9).toFixed(2).toString().replace('.', ',');
    this.pdfService.createPdfEnd(
      this.customerText,
      body,
      this.goodsList,
      cashValueString,
      provisionValueString,
      payoutValueString
    );
  }
}
