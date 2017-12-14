import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage, ProductoPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
  productos: any = [
    {
      id: 1,
      nombre: 'Atun',
      cantidad: 12,
      precio: 2.54,
      descripcion: 'Nueva presentacion',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bluefin-big.jpg/250px-Bluefin-big.jpg'
    },
    {
      id: 2,
      nombre: 'Fideo',
      cantidad: 6,
      precio: 3.52,
      descripcion: 'Fundas de 500mg',
      img: 'https://s0.dia.es/medias/hc1/h46/9158826983454.jpg'
    },
    {
      id: 3,
      nombre: 'Mortaleda',
      cantidad: 21,
      precio: 1.54,
      descripcion: 'La economica',
      img: 'http://www.losquijales.com/WebRoot/epagesES/Shops/losquijales/5535/0E17/C162/D69D/9C9B/0A0C/05EA/6669/mortadela_imperial_400.jpg'
    },
    {
      id: 4,
      nombre: 'Azucar',
      cantidad: 32,
      precio: 4.54,
      descripcion: 'Presentaciones de 2kg',
      img: 'http://azucarledesma.com/wp-content/themes/ledesma/assets/img/pack-superior.png'
    },
    {
      id: 5,
      nombre: 'sardina',
      cantidad: 8,
      precio: 4.54,
      descripcion: 'Con aceite de oliva',
      img: 'http://www.empaquetadoseltrece.com/wp-content/uploads/2016/07/productos-empaquetados-el-trece_0002_mockup-sardina-caned.jpg'
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

  volverHome() {
    this.navCtrl.pop()
  }

  verProducto(producto) {
    //console.dir(producto);

    this.navCtrl.push(ProductoPage, producto);
  }

}
