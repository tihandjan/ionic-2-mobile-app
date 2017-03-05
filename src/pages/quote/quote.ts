import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { quotes } from '../../data/quotes.interface';


@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  quote: any = {};

  constructor(public navCtrl: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log(this.navCtrl.data);
    this.quote = this.navCtrl.data;
  }

  closeModal() {
    this.viewCtrl.dismiss();    
  }

  closeModalAndRemove(remove) {
    this.viewCtrl.dismiss(remove);        
  }

}
