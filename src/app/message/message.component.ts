import { Component } from '@angular/core';
import { trigger, transition, animate, state, style } from '@angular/animations';
import { timer } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import * as confetti from 'canvas-confetti';



const desktopAnimations = [
  trigger('envelope', [
    state('closed', style({
      opacity: 1,
      visibility: 'visible',
    })),
    state('open', style({
      opacity: 0,
      transform: 'translateY(500px)'
    })),
    transition('closed => open', [
      animate('3s')
    ])
  ]),
  trigger('envelopeTop', [
    state('closed', style({
    })),
    state('open', style({
      transform: 'rotateX(180deg)',
      transitionTimingFunction: 'linear',
      transformStyle: 'flat',
    })),
    transition('closed => open', [
      animate('1s')
    ])
  ]),
  trigger('card', [
    state('closed', style({
    })),
    state('open', style({
      scale: '100%',
      transform: 'translateY(-50px)'
    })),
    transition('closed => open', [
      animate('1s')
    ])
  ]),
  trigger('survey', [
    state('closed', style({
      opacity: 0,
    })),
    state('open', style({
      opacity: 1,
    })),
    transition('closed => open', [
      animate('1s')
    ])
  ]),
];

const mobileAnimations = [
  trigger('envelope', [
    state('closed', style({
      opacity: 1,
      visibility: 'visible',
    })),
    state('open', style({
      opacity: 0,
      transform: 'translateY(500px)'
    })),
    transition('closed => open', [
      animate('3s')
    ])
  ]),
  trigger('envelopeTop', [
    state('closed', style({
    })),
    state('open', style({
      transform: 'rotateX(180deg)',
      transitionTimingFunction: 'linear',
      transformStyle: 'flat',
    })),
    transition('closed => open', [
      animate('1s')
    ])
  ]),
  trigger('card', [
    state('closed', style({
    })),
    state('open', style({
      scale: '175%',
      transform: 'translateY(-50px)'
    })),
    transition('closed => open', [
      animate('1s')
    ])
  ]),
  trigger('survey', [
    state('closed', style({
      opacity: 0,
    })),
    state('open', style({
      opacity: 1,
    })),
    transition('closed => open', [
      animate('1s')
    ])
  ]),
];


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: getAnimations()
})
export class MessageComponent {

  openLetter: boolean = false;
  moveLetter: boolean = false;
  showButton: boolean = false;
  showSurvey: boolean = false;

  public openCard(): void {
    // we only want this to run once
    if(!this.openLetter){
      this.openLetter = true;
    
      let myCanvas = document.createElement('canvas');
      myCanvas.setAttribute("overflow", "hidden");
      myCanvas.height = window.innerHeight * 0.9;
      myCanvas.width = document.body.clientWidth * 0.5;
      let myCanvas2 = document.createElement('canvas');
      myCanvas2.height = window.innerHeight * 0.9;
      myCanvas.setAttribute("overflow", "hidden");
  
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

      timer(5000).subscribe(_ => {
        this.showButton = true;
        document.body.removeChild(myCanvas);
        document.body.removeChild(myCanvas2);
      });
    }
  }
    
  public hotelBlock(): void{
    this.showSurvey = true;
  }

  public back(): void {
    this.showSurvey = false;
  }
}

export function getAnimations() {
  const isMobile = matchMedia("(max-width: 600px)").matches;

  return isMobile ? mobileAnimations : desktopAnimations;
}
