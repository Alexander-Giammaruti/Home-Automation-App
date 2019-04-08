import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbAlertModule,
    CoreModule,    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
