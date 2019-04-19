import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  items: Array<any> = [
    {
      "name": "Novo Pedido",
      "link": "customer-select"
    },
    {
      "name": "Catálogo de Produtos"
    },
    {
      "name": "Lista de Pedidos"
    },
    {
      "name": "Lista de Clientes"
    },
    {
      "name": "Nota Fiscal"
    },
  ]

  constructor (private navCtrl: NavController) {
    
  }

  navigateTo (link: string) {
    this.navCtrl.navigateForward([link])
  }
}
