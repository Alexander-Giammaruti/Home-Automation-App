import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { LockEditComponent } from './lock-edit/lock-edit.component';
import { LockEditDetailComponent } from './lock-edit/lock-edit-detail/lock-edit-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatSlideToggleModule } from '@angular/material';
import { CommonModule } from '@angular/common';


const locksRoutes: Routes = [
    
    {path: 'locks/edit', component: LockEditComponent, children: [
        {path: '', component: LockEditDetailComponent},
        {path: ':id', component: LockEditDetailComponent}
    ]}
    
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(locksRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSlideToggleModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [LockEditDetailComponent]
})


export class LocksRoutingModule {}