import { NgModule } from '@angular/core';

import { MatButtonModule, MatSlideToggleModule } from '@angular/material';

import { SecuritySystemComponent } from './security-system/security-system.component';
import { HomeSecurityRoutingModule } from './home-security.routing.module';
import { LocksComponent } from './security-system/locks/locks.component';
import { HomeSecurityComponent } from './home-security.component';
import { CommonModule } from '@angular/common';
import { WindowsComponent } from './security-system/windows/windows.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LockListComponent } from './security-system/locks/lock-list/lock-list.component';
import { LockItemComponent } from './security-system/locks/lock-list/lock-item/lock-item.component';
import { StoreModule } from '@ngrx/store';
import { LocksRoutingModule } from './security-system/locks/locks.routing.module';
import { LockEditComponent } from './security-system/locks/lock-edit/lock-edit.component';
import { WindowListComponent } from './security-system/windows/window-list/window-list.component';
import { WindowItemComponent } from './security-system/windows/window-list/window-item/window-item.component';
import { WindowsRoutingModule } from './security-system/windows/windows.routing.module';
import { WindowEditComponent } from './security-system/windows/window-edit/window-edit.component';
import { SecuritySystemReducer } from './security-system/store/security-system.reducers';

@NgModule({
    declarations: [
        HomeSecurityComponent,
        SecuritySystemComponent,
        LocksComponent,
        LockListComponent,
        LockItemComponent,
        LockEditComponent,
        WindowsComponent,
        WindowListComponent,
        WindowItemComponent,
        WindowEditComponent,
        
    ],
    imports: [ 
        CommonModule,
        LocksRoutingModule,
        WindowsRoutingModule,
        StoreModule.forFeature('security-system', SecuritySystemReducer),   
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