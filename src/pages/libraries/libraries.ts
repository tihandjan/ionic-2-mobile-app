import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { quotes } from '../../data/quotes.interface';
import quotesCollection from '../../data/quote';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-libraries',
  templateUrl: 'libraries.html'
})
export class LibrariesPage implements OnInit {
  QuotesPage = QuotesPage;
  quotes: { category: string, quotes: quotes[], icon: string }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {
    this.quotes = quotesCollection;
  }

}
