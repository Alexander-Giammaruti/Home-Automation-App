import { Routes, RouterModule } from "@angular/router";
import { RoomsComponent } from './rooms.component';
import { NgModule } from '@angular/core';


const roomsRoutes: Routes = [
    {path: '', component: RoomsComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(roomsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoomsRoutingModule {}