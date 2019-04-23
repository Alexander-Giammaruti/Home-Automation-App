import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RoomsRoutingModule } from './rooms.routing.module';
import { RoomsComponent } from './rooms.component';
import { StoreModule } from '@ngrx/store';
import { RoomReducer } from './store/room.reducers';
import { MatSliderModule, MatButtonModule, MatSlideToggleModule } from '@angular/material';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { RoomItemComponent } from './room-item/room-item.component';
import { RoomLightListComponent } from './room-list/room-item/room-light-list/room-light-list.component';

@NgModule({
    declarations: [
        RoomsComponent,
        RoomEditComponent,
        RoomItemComponent,
        RoomLightListComponent
    ],
    imports: [ 
        SharedModule,
        RoomsRoutingModule,
        StoreModule.forFeature('rooms', RoomReducer),
        MatSliderModule,
        MatButtonModule,
        MatSlideToggleModule
    ],
    exports: [],
    providers: [],
})
export class RoomsModule {}