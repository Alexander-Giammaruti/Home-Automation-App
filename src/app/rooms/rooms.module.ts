import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RoomsRoutingModule } from './rooms.routing.module';
import { RoomsComponent } from './rooms.component';
import { StoreModule } from '@ngrx/store';
import { RoomReducer } from './store/room.reducers';
import { MatSliderModule, MatButtonModule, MatSlideToggleModule, MatCardModule } from '@angular/material';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { RoomItemComponent } from './room-item/room-item.component';
import { RoomLightListComponent } from './room-item/room-light-list/room-light-list.component';
import { RoomLightItemComponent } from './room-item/room-light-list/room-light-item/room-light-item.component';
import { RoomLightEditComponent } from './room-item/room-light-edit/room-light-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RoomsComponent,
        RoomEditComponent,
        RoomItemComponent,
        RoomLightListComponent,
        RoomLightItemComponent,
        RoomLightEditComponent
    ],
    imports: [ 
        SharedModule,
        RoomsRoutingModule,
        StoreModule.forFeature('rooms', RoomReducer),
        FormsModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatCardModule
    ],
    exports: [],
    providers: [],
})
export class RoomsModule {}