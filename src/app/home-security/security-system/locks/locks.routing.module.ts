import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { LocksComponent } from './locks.component';
import { LockEditComponent } from './lock-edit/lock-edit.component';


const locksRoutes: Routes = [
    {path: 'locks/:id/edit', component: LockEditComponent},
    {path: 'locks/new', component: LockEditComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(locksRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class LocksRoutingModule {}