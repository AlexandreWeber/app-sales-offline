import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  items: Array<any> = [
    {
      "name": "Novo Pedido"
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
}
