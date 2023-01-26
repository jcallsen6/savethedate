import { Component } from '@angular/core';

import { bounceInDownOnEnterAnimation, bounceOutDownOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [
    bounceInDownOnEnterAnimation({duration: 6000, delay: 0}),
    bounceOutDownOnLeaveAnimation({duration: 4000, delay: 0})
  ]
})
export class MessageComponent {

  showCard: boolean = true;

  removeCard() {
    this.showCard = false;
  }
}