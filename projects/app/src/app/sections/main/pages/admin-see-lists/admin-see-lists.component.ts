import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../modules/core/services/api.service';

@Component({
  selector: 'app-admin-see-lists',
  templateUrl: './admin-see-lists.component.html',
  styleUrls: ['./admin-see-lists.component.scss'],
})
export class AdminSeeListsComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    let counter = 0;
    let t = document.getElementById('list-table')!.getElementsByTagName('tbody')[0];
    this.apiService.findAllLists().subscribe(value => {
      for (let i = 0; i < value.length; i++) {
        this.apiService.findList(+value[i].number).subscribe(value2 => {
          for (let j = 0; j < value2[0].tableItems.length; j++) {
            const row: string[] = Object.values(value2[0].tableItems[j]);
            row.shift();

            let r = t.insertRow(counter);
            r.insertCell(0).innerHTML = row[0] || '--';
            r.insertCell(1).innerHTML = row[1] || '--';
            r.insertCell(2).innerHTML = row[2] || '--';
            r.insertCell(3).innerHTML = row[3] || '--';
            r.insertCell(4).innerHTML = row[4] || '--';
            r.insertCell(5).innerHTML = row[5] || '--';
            r.insertCell(6).innerHTML = row[6] || '--';
            r.insertCell(7).innerHTML = row[7] || '--';
            r.insertCell(8).innerHTML = row[8] || '--';

            counter = counter + 1;
          }
          if (value2[0].tableItems.length === 0) {
            let r = t.insertRow(counter);
            r.insertCell(0).innerHTML = value2[0].number + '-A';
            r.insertCell(1).innerHTML = 'Kein';
            r.insertCell(2).innerHTML = 'Eintrag!';
            counter = counter + 1;
          }
          let r = t.insertRow(counter);
          r.insertCell(0).innerHTML = '-----';
          r.insertCell(1).innerHTML = '-----';
          r.insertCell(2).innerHTML = '-----';
          r.insertCell(3).innerHTML = '-----';
          r.insertCell(4).innerHTML = '-----';
          r.insertCell(5).innerHTML = '-----';
          r.insertCell(6).innerHTML = '-----';
          r.insertCell(7).innerHTML = '-----';
          r.insertCell(8).innerHTML = '-----';
          counter = counter + 1;
        });
      }
    });
  }
}
