import { NgModule } from '@angular/core';

import { MatButtonModule, MatSlideToggleModule } from '@angular/material';

import { SecuritySystemComponent } from './security-system/security-system.component';
import { HomeSecurityRoutingModule } from './home-security.routing.module';
import { LocksComponent } from './security-system/locks/locks.component';
import { HomeSecurityComponent } from './home-security.component';
import { CommonModule } from '@angular/common';
import { WindowsComponent } from './security-system/windows/windows.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomeSecurityComponent,
        SecuritySystemComponent,
        LocksComponent,
        WindowsComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeSecurityRoutingModule,
        MatButtonModule,
        MatSlideToggleModule
     ],
    exports: [
    ],
    providers: [

    ],
})

export class HomeSecurityModule {}