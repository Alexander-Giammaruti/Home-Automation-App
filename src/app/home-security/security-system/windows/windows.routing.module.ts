import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { WindowEditComponent } from './window-edit/window-edit.component';


const windowsRoutes: Routes = [
    {path: 'windows/:id/edit', component: WindowEditComponent},
    {path: 'windows/new', component: WindowEditComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(windowsRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class WindowsRoutingModule {}