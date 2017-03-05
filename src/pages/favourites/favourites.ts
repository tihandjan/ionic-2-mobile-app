import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { QuoteService } from '../../services/quote';
import { quotes } from '../../data/quotes.interface';
import { QuotePage } from '../../pages/quote/quote';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage {
  quotes: quotes[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private quoteService: QuoteService, private modalCtrl: ModalController) {}

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavQuotes();
    console.log(this.quotes);
  }

  openModal(quote: quotes) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();  
    modal.onDidDismiss((remove) => {
      if(remove) {
      this.quoteService.removeFromFav(quote);
      this.quotes = this.quoteService.getFavQuotes();
      } 
    })
  }

  removeQuote(quote) {
    this.quoteService.removeFromFav(quote);
    let index = this.quotes.indexOf(quote);
    this.quotes.splice(index, 1);
  }

}
