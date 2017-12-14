import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductosPage } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irListaProductos($event) {
    console.log('Enviando a lista productos');
    console.dir($event);
    this.navCtrl.push(ProductosPage);
  }

}
