import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwdbComponent } from './twdb/twdb.component';
import { FormsModule } from '@angular/forms';
import { StructuralComponent } from './structural/structural.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    EventbindingComponent,
    TwdbComponent,
    StructuralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
