import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  tapped: number = 0;
  pressed: number = 0;
  won: string = "To win you need to have 2 pressed and 4 taps"

  onTap() {
    ++this.tapped;
    this.doIWin();    
  }

  onPress() {
    ++this.pressed;
    this.doIWin();
  }

  doIWin() {
    if(this.tapped == 4 && this.pressed == 2) {
      this.won = "Won!!!!!!"
    }
  }

  onReset(event) {
    if (event.resetAll) {
      this.tapped = 0;
      this.pressed = 0;
      this.won = "To win you need to have 2 pressed and 4 taps";
    } else if (event.resetTapped) {
      this.tapped = 0;      
    } else if (event.resetPressed) {
      this.pressed = 0;      
    }
  }
}
