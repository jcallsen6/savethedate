import { Component } from '@angular/core';
import { trigger, transition, animate, state, style } from '@angular/animations';
import { timer } from 'rxjs';
import * as confetti from 'canvas-confetti';

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

  openCard() {
    this.openLetter = true;
    
    let myCanvas = document.createElement('canvas');
    myCanvas.height = window.innerHeight;
    myCanvas.width = document.body.clientWidth * 0.5;
    let myCanvas2 = document.createElement('canvas');
    myCanvas2.height = window.innerHeight;

    //If this second canvas is too large, it will be placed under the first canvas. Unsure why the 17px offset is needed, perhaps the scrollbar or padding?
    myCanvas2.width = document.body.clientWidth * 0.5 - 17;

    document.body.appendChild(myCanvas);
    document.body.appendChild(myCanvas2);

    timer(1500).subscribe(_ => this.moveLetter = true);
    confetti.create(myCanvas, {
      resize: true,
    })({
      shapes: ['square'],
      particleCount: 100,
      spread: 90,
      origin: {
        x: 0,
        y: 0.3
      },
      angle: 0,
      startVelocity: 15,
  });
    timer(1500).subscribe(_ => this.moveLetter = true);
    confetti.create(myCanvas2, {
      resize: true,
    })({
      shapes: ['square'],
      particleCount: 100,
      spread: 90,
      origin: {
        x: 1,
        y: 0.3
      },
      angle: 180,
      startVelocity: 15,
  });
  }
}
