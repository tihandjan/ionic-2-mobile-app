import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-reset',
    template: `
        <ion-col col-4>
            <button class="btn-pnh" ion-button small outline color="danger" (click)="resetAll()">Reset all</button>
        </ion-col> 
        <ion-col col-4>
            <button class="btn-pnh" ion-button small outline color="danger" (click)="resetTapped()">Reset "Tapped"</button>
        </ion-col>
        <ion-col col-4>
            <button class="btn-pnh" ion-button small outline color="danger" (click)="resetPressed()">Reset "Pressed"</button>
        </ion-col>
    `
})
export class ResetComponent {
    @Output() reset: EventEmitter<any> = new EventEmitter();

    resetAll() {
        this.reset.emit({resetAll: true});
    }

    resetTapped() {
        this.reset.emit({resetTapped: true});
    }

    resetPressed() {
        this.reset.emit({resetPressed: true});
    }

}