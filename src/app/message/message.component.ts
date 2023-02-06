import { Component } from '@angular/core';
import { trigger, transition, animate, state, style } from '@angular/animations';
import { timer } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [
    trigger('envelope', [
      state('closed', style({
        opacity: 1,
        visibility: 'visible',
        transition: 'all 2s ease'
      })),
      state('open', style({
        opacity: 0,
        transform: 'translateY(15em)'
      })),
      transition('open => closed', [
        animate('1.5s')
      ])
    ]),
    trigger('envelopeTop', [
      state('closed', style({
        opacity: 1,
        transition: 'rotateX(180deg)'
      })),
      state('open', style({
        transform: 'rotateX(0deg)'
      })),
      transition('open => closed', [
        animate('1.5s')
      ])
    ]),
    trigger('card', [
      state('closed', style({
        scale: '40%',
      })),
      state('open', style({
        scale: '70%',
        marginTop: "0",
      })),
      transition('open => closed', [
        animate('1.5s')
      ])
    ])
  ]
})
export class MessageComponent {

  openLetter: boolean = false;
  moveLetter: boolean = false;
  // TODO confetti
  // TODO fix top card not moving with body
  // TODO fix firefox
  // TODO fix mobile
  openCard() {
    this.openLetter = true;
    timer(1500).subscribe(_ => this.moveLetter = true);
  }
}