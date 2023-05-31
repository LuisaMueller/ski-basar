import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from '../../../../modules/core/models/customer.model';
import { Good } from '../../../../modules/core/models/good.model';
import { GoodsList } from '../../../../modules/core/models/goods-list.model';
import { ApiService } from '../../../../modules/core/services/api.service';
import { ChangeableVariablesService } from '../../../../modules/core/services/changeable-variables.service';
import { PdfService } from '../../../../modules/core/services/pdf.service';
import { DeleteTableModalComponent } from '../delete-table-modal/delete-table-modal.component';
import { PayoutAmountModalComponent } from '../payout-amount-modal/payout-amount-modal.component';
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
  currentCustomer: Customer;
  existingNumbersList: string[] = [];
  submitForm: FormGroup;
  noteForm: FormGroup;
  deletionHint: string = '';
  payoutHint: string = '';
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

          this.createDeletionHint();

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
          this.loadOrErrorNumber = value.id;
          this.loadOrErrorText = 'Nummer ' + value.id + ' nicht vorhanden';
        }
      );
      this.apiService.findCustomer(+value.id).subscribe(
        value2 => {
          this.currentCustomer = value2[0].customer;
        },
        error => {}
      );
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
      if (this.currentCustomer.isHelper === false) {
        const regex = new RegExp('^(?:[5-9]{1}|[1-9]{1}[0-9]+)(?:,[0-9]{1,2})?$');
        if (!regex.test(prizeBeforeChange) && regex.test(result.prize)) {
          updatedFee = updatedFee + 1;
        }
        if (regex.test(prizeBeforeChange) && !regex.test(result.prize)) {
          if (updatedFee >= 1) {
            updatedFee = updatedFee - 1;
          } else updatedFee = 0;
        }
      } else updatedFee = 0;

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
        let updatedDeletedTableItems = this.goodsList.deletedTableItems?.slice();
        updatedDeletedTableItems?.push(good);

        let updatedTableItems = this.goodsList.tableItems.slice();
        updatedTableItems.splice(index, 1);
        let updatedFee = this.goodsList.fee!;
        if (this.currentCustomer.isHelper === false) {
          const regex = new RegExp('^(?:[5-9]{1}|[1-9]{1}[0-9]+)(?:,[0-9]{1,2})?$');
          if (regex.test(good.prize)) {
            if (result.reason === 'editingError') {
              if (updatedFee >= 1) {
                updatedFee = updatedFee - 1;
              } else updatedFee = 0;
            }
          }
        } else updatedFee = 0;

        this.apiService
          .updateList(this.goodsList.id, {
            tableItems: updatedTableItems,
            deletedTableItems: updatedDeletedTableItems,
            fee: updatedFee,
          })
          .subscribe(value => {
            this.goodsList = value;
            this.createDeletionHint();
          });
      }
    });
  }

  createDeletionHint() {
    this.deletionHint = '';
    if (this.goodsList.deletedTableItems) {
      for (let i = 0; i < this.goodsList.deletedTableItems!.length; i++) {
        if (this.deletionHint === '') {
          this.deletionHint = this.goodsList.deletedTableItems[i].number;
        } else this.deletionHint = this.deletionHint + ', ' + this.goodsList.deletedTableItems[i].number;
      }
    }
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
    if (this.currentCustomer.isHelper === false) {
      const regex = new RegExp('^(?:[5-9]{1}|[1-9]{1}[0-9]+)(?:,[0-9]{1,2})?$');
      if (regex.test(input.prize)) {
        updatedFee = updatedFee + 1;
      }
    } else updatedFee = 0;

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
    this.router.navigate(['/main-desktop/' + goodListNr]);
  }

  navTo(event: any) {
    this.router.navigate(['/main-desktop/' + event.target.value]);
    event.target.value = '';
  }
  createCustomerText() {
    return (
      this.currentCustomer.firstName +
      ' ' +
      this.currentCustomer.lastName +
      '\n' +
      this.currentCustomer.street +
      '\n' +
      this.currentCustomer.postcode +
      '\n' +
      'Tel.: ' +
      this.currentCustomer.phonenumber +
      '\n' +
      'Mail: ' +
      this.currentCustomer.email
    );
  }
  createPdfStart() {
    const body = [['Nr.', 'Art', 'Marke', 'Größe', 'Farbe', 'Sonstiges', 'Preis [€]', 'VB [€]']];
    const customerText = this.createCustomerText();

    if (this.goodsList.tableItems.length === 0) {
      body.push(['-', '-', '-', '-', '-', '-', '-', '-']);
    }

    for (let i = 0; i < this.goodsList.tableItems.length; i++) {
      const row = Object.values(this.goodsList.tableItems[i]);
      row.shift();
      row.pop();
      body.push(row);
    }

    this.pdfService.createPdfStart(customerText, body, this.goodsList);
  }

  createPdfStartForMail() {
    const body = [['Nr.', 'Art', 'Marke', 'Größe', 'Farbe', 'Sonstiges', 'Preis [€]', 'VB [€]']];
    const customerText = this.createCustomerText();

    if (this.goodsList.tableItems.length === 0) {
      body.push(['-', '-', '-', '-', '-', '-', '-', '-']);
    }

    for (let i = 0; i < this.goodsList.tableItems.length; i++) {
      const row = Object.values(this.goodsList.tableItems[i]);
      row.shift();
      row.pop();
      body.push(row);
    }

    this.apiService.updateList(this.goodsList.id, { isMailStartSend: true }).subscribe(value => {
      this.goodsList = value;
      this.pdfService.createPdfStartForMail(customerText, body, this.goodsList);
    });
  }

  createPdfEnd() {
    const body = [['Nr.', 'Art', 'Marke', 'Größe', 'Farbe', 'Sonstiges', 'Preis [€]', 'VB [€]', 'Verkauft für [€]']];
    let payoutArray: string[] = [];
    const customerText = this.createCustomerText();

    if (this.goodsList.tableItems.length === 0) {
      body.push(['-', '-', '-', '-', '-', '-', '-', '-', '-']);
    }

    for (let i = 0; i < this.goodsList.tableItems.length; i++) {
      const row = Object.values(this.goodsList.tableItems[i]);

      row.shift();
      body.push(row);
    }
    if (this.currentCustomer.isHelper === true) {
      payoutArray = this.calculatePayoutValueForHelper();
    } else payoutArray = this.calculatePayoutValue();

    this.pdfService.createPdfEnd(customerText, body, this.goodsList, payoutArray[0], payoutArray[1], payoutArray[2]);
  }

  createPdfEndForMail() {
    const body = [['Nr.', 'Art', 'Marke', 'Größe', 'Farbe', 'Sonstiges', 'Preis [€]', 'VB [€]', 'Verkauft für [€]']];
    let payoutArray: string[] = [];
    const customerText = this.createCustomerText();

    if (this.goodsList.tableItems.length === 0) {
      body.push(['-', '-', '-', '-', '-', '-', '-', '-', '-']);
    }

    for (let i = 0; i < this.goodsList.tableItems.length; i++) {
      const row = Object.values(this.goodsList.tableItems[i]);

      row.shift();
      body.push(row);
    }
    if (this.currentCustomer.isHelper === true) {
      payoutArray = this.calculatePayoutValueForHelper();
    } else payoutArray = this.calculatePayoutValue();

    this.apiService.updateList(this.goodsList.id, { isMailEndSend: true }).subscribe(value => {
      this.goodsList = value;

      this.pdfService.createPdfEndForMail(
        customerText,
        body,
        this.goodsList,
        payoutArray[0],
        payoutArray[1],
        payoutArray[2]
      );
    });
  }

  calculatePayoutValue() {
    let cashValue: number = 0;
    let payoutArray: string[] = ['', '', ''];
    for (let i = 0; i < this.goodsList.tableItems.length; i++) {
      const row = Object.values(this.goodsList.tableItems[i]);
      if (row[9] !== null) {
        cashValue = cashValue + parseFloat(row[9].replace(',', '.'));
      }
    }
    const cashValueString = cashValue.toFixed(2).toString().replace('.', ',');
    const provisionValueString = (cashValue * 0.1).toFixed(2).toString().replace('.', ',');
    const payoutValueString = (cashValue * 0.9).toFixed(2).toString().replace('.', ',');
    payoutArray[0] = cashValueString;
    payoutArray[1] = provisionValueString;
    payoutArray[2] = payoutValueString;
    return payoutArray;
  }

  calculatePayoutValueForHelper() {
    let cashValue: number = 0;
    let payoutArray: string[] = ['', '', ''];
    for (let i = 0; i < this.goodsList.tableItems.length; i++) {
      const row = Object.values(this.goodsList.tableItems[i]);
      if (row[9] !== null) {
        cashValue = cashValue + parseFloat(row[9].replace(',', '.'));
      }
    }
    const cashValueString = cashValue.toFixed(2).toString().replace('.', ',');
    const provisionValueString = '0,00';
    const payoutValueString = cashValueString;
    payoutArray[0] = cashValueString;
    payoutArray[1] = provisionValueString;
    payoutArray[2] = payoutValueString;
    return payoutArray;
  }

  openPayoutAmountModal() {
    let payoutArray: string[] = [];
    if (this.currentCustomer.isHelper === true) {
      payoutArray = this.calculatePayoutValueForHelper();
    } else payoutArray = this.calculatePayoutValue();
    const modalRef = this.modalService.open(PayoutAmountModalComponent, { backdrop: 'static' });
    modalRef.componentInstance.payoutArray = payoutArray;
    modalRef.result
      .then(result => {
        if (result === 'verschickt') {
          this.createPdfEndForMail();
          this.payoutHint = 'Der Beleg wurde erfolgreich verschickt.';
        }
      })
      .catch(error => {});
  }
}
