import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EnvelopeComponent } from './envelope/envelope.component';
import { CardComponent } from './card/card.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MessageComponent },
    ]),
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    EnvelopeComponent,
    CardComponent,
    MessageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
