import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.scss'],
})
export class CustomerSelectComponent implements OnInit {

  termToSearch: '';
  customers: Array<any> = [];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  search () {
    console.log('search', this.termToSearch);
    this.customers = [
      {
        "name": "Alexandre Weber Dalabona", 
        "code": "10",
        "cgc": "85.337.449/0001-00"
      },
      {
        "name": "Anderson Eicholz",
        "code": "20",
        "cgc": "51.458.922/0001-88"
      },
      {
        "name": "Allan Fagundes Rócio",
        "code": "30",
        "cgc": "21.230.846/0001-98"
      },
      {
        "name": "Jean Vieira",
        "code": "40",
        "cgc": "82.310.734/0001-31"
      },
      {
        "name": "Everson Gonçalves Larceda",
        "code": "50",
        "cgc": "03.386.961/0001-74"
      }
    ]

    if (this.termToSearch === '') {
      this.customers = [];
    }
  }

  newSale (code: string) {
    this.navCtrl.navigateForward(['/sales-header', code]);
  }
}
