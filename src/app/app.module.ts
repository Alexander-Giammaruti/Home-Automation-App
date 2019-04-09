import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import {reducers } from './store/app.reducers'
import { GestureConfig } from '@angular/material';
import { WindowsComponent } from './home-security/security-system/windows/windows.component';
import { WindowListComponent } from './home-security/security-system/windows/window-list/window-list.component';
import { WindowItemComponent } from './home-security/security-system/windows/window-list/window-item/window-item.component';
import { WindowEditComponent } from './home-security/security-system/windows/window-edit/window-edit.component';
import { LockListComponent } from './home-security/security-system/locks/lock-list/lock-list.component';
import { LockItemComponent } from './home-security/security-system/locks/lock-list/lock-item/lock-item.component';


@NgModule({
  declarations: [
    AppComponent,
    WindowsComponent,
    WindowListComponent,
    WindowItemComponent,
    WindowEditComponent,
    LockListComponent,
    LockItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    NgbAlertModule,
    CoreModule,    
    StoreModule.forRoot(reducers)
    
  ],
  providers: [
    {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
