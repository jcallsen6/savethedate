import { Component } from '@angular/core';

import { EnvelopeComponent } from './envelope/envelope.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'savethedate';
}
