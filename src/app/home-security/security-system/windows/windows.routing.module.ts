import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { WindowEditComponent } from './window-edit/window-edit.component';
import { WindowEditDetailComponent } from './window-edit/window-edit-detail/window-edit-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';


const windowsRoutes: Routes = [
    {path: 'windows/edit', component: WindowEditComponent, children: [
        {path: '', component: WindowEditDetailComponent},
        {path: ':id', component: WindowEditDetailComponent}
    ]}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(windowsRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [WindowEditDetailComponent]
})


export class WindowsRoutingModule {}