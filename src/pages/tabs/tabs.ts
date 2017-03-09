import { Component } from '@angular/core';

import { FavouritesPage } from '../favourites/favourites';
import { LibrariesPage } from '../libraries/libraries';
import { GamePage } from '../game/game';

@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab tabIcon="star" [root]="FavouritesPage"></ion-tab>
            <ion-tab tabIcon="book" [root]="LibrariesPage"></ion-tab>
            <ion-tab tabIcon="game-controller-b" [root]="GamePage"></ion-tab>
        </ion-tabs>
    `
})

export class TabsPage {
    FavouritesPage = FavouritesPage;
    LibrariesPage = LibrariesPage;
    GamePage = GamePage;
}