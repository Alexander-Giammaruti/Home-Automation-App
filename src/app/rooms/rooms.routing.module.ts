import { Routes, RouterModule } from "@angular/router";
import { RoomsComponent } from './rooms.component';
import { NgModule } from '@angular/core';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { RoomItemComponent } from './room-item/room-item.component';
import { RoomLightEditComponent } from './room-item/room-light-edit-page/room-light-edit/room-light-edit.component';
import { RoomEditDetailComponent } from './room-edit/room-edit-detail/room-edit-detail.component';
import { RoomLightEditPageComponent } from './room-item/room-light-edit-page/room-light-edit-page.component';


const roomsRoutes: Routes = [
    {path: '', component: RoomsComponent, children: [
        {path: 'edit' , component: RoomEditComponent, children: [
            {path:'', component: RoomEditDetailComponent},
            {path: ':id', component: RoomEditDetailComponent}
        ]},
        {path: ':id', component: RoomItemComponent},
        {path: ':id/edit', component: RoomLightEditPageComponent, children: [
            {path: '', component: RoomLightEditComponent},
            {path: ':lightID', component: RoomLightEditComponent},
        ]},
        
        
    ]}
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