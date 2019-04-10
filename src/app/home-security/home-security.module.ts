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
import { LockReducer } from './security-system/locks/store/lock.reducers';
import { LocksRoutingModule } from './security-system/locks/locks.routing.module';
import { LockEditComponent } from './security-system/locks/lock-edit/lock-edit.component';

@NgModule({
    declarations: [
        HomeSecurityComponent,
        SecuritySystemComponent,
        LocksComponent,
        LockListComponent,
        LockItemComponent,
        LockEditComponent,
        WindowsComponent
    ],
    imports: [ 
        CommonModule,
        LocksRoutingModule,
        StoreModule.forFeature('locks', LockReducer),
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