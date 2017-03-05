import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { quotes } from '../../data/quotes.interface';
import { QuoteService } from '../../services/quote';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quote: { category: string, quotes: quotes[], icon: string };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private alertCtrl: AlertController,
    private quoteService: QuoteService
  ) {}

  ngOnInit() {
    this.quote = this.navParams.data;
  }
 
  onAlert(quote) {
    let alert = this.alertCtrl.create({
      title: 'Add to favourite?',
      buttons: [{
        text: 'ok',
        handler: () => {
          this.quoteService.addToFav(quote);
        }
      },
      {
        text: 'cancel',
        handler: () => {
          console.log('cancel');
        }
      }]
    });
    alert.present();
  }

  isFavourite(quote) {
    return this.quoteService.isFavourite(quote);
  }

  removeFavorite(q) {
    this.quoteService.removeFromFav(q);
  }

}
