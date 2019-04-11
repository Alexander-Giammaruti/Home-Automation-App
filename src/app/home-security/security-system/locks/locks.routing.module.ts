import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { LockEditComponent } from './lock-edit/lock-edit.component';
import { LockEditDetailComponent } from './lock-edit/lock-edit-detail/lock-edit-detail.component';


const locksRoutes: Routes = [
    
    {path: 'locks/edit', component: LockEditComponent, children: [
        {path: '', component: LockEditDetailComponent},
        {path: ':id', component: LockEditDetailComponent}
    ]}
    
]

@NgModule({
    imports: [
        RouterModule.forChild(locksRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [LockEditDetailComponent]
})


export class LocksRoutingModule {}