import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { LightsModule } from './lights/lights.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbAlertModule,
    CoreModule,
    LightsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
