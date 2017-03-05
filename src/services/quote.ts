import { quotes } from '../data/quotes.interface';

export class QuoteService {
    quoteFav: quotes[] = [];

    addToFav(fav) {
        this.quoteFav.push(fav);
        console.log(this.quoteFav);
    }

    removeFromFav(fav) {
        let index = this.quoteFav.indexOf(fav);
        this.quoteFav.splice(index, 1);
        console.log(this.quoteFav);
    }

    getFavQuotes() {
        return this.quoteFav.slice();
    }

    isFavourite(quote) {
        let index = this.quoteFav.indexOf(quote);
        return !(index == -1);
    }
}