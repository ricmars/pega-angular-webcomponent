import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { Injector} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PegaMashupComponent } from './pega-mashup/pega-mashup.component';
@NgModule({ 
  declarations: [
    PegaMashupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [ PegaMashupComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    createCustomElement(PegaMashupComponent, { injector });
  }
  ngDoBootstrap() {}
 }
