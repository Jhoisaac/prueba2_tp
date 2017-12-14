import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
  producto: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('navParams', navParams);
    console.log('navParams.data', navParams.data);
    this.producto = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }

  volverInicio() {
    this.navCtrl.popToRoot();
  }

}
