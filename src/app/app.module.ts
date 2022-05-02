import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgendaControlModule } from './agenda-control/agenda-control.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AgendaControlModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
