import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { LibrariesPage } from '../pages/libraries/libraries';
import { FavouritesPage } from '../pages/favourites/favourites';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuotePage } from '../pages/quote/quote';
import { QuoteService } from '../services/quote';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LibrariesPage,
    FavouritesPage,
    QuotesPage,
    QuotePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LibrariesPage,
    FavouritesPage,
    QuotesPage,
    QuotePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, QuoteService]
})
export class AppModule {}
