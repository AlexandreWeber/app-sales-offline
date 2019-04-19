import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.scss'],
})
export class CustomerSelectComponent implements OnInit {

  termToSearch: '';
  customers: Array<any> = [];

  constructor() { }

  ngOnInit() {}

  search () {
    console.log('search', this.termToSearch);
    this.customers = [
      {
        "name": "Alexandre"
      },
      {
        "name": "Anderson"
      },
      {
        "name": "Allan"
      },
      {
        "name": "Jean"
      },
      {
        "name": "Everson"
      }
    ]

    if (this.termToSearch === '') {
      this.customers = [];
    }
  }

}
