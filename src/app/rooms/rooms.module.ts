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
import { RoomEditListComponent } from './room-edit/room-edit-list/room-edit-list.component';
import { RoomEditListItemComponent } from './room-edit/room-edit-list/room-edit-list-item/room-edit-list-item.component';
import { RoomEditDetailComponent } from './room-edit/room-edit-detail/room-edit-detail.component';
import { EffectsModule } from '@ngrx/effects';
import { RoomEffects } from './store/room.effects';

@NgModule({
    declarations: [
        RoomsComponent,
        RoomEditComponent,
        RoomEditDetailComponent,
        RoomEditListComponent,
        RoomEditListItemComponent,
        RoomItemComponent,
        RoomLightListComponent,
        RoomLightItemComponent,
        RoomLightEditComponent
    ],
    imports: [ 
        SharedModule,
        RoomsRoutingModule,
        StoreModule.forFeature('rooms', RoomReducer),
        EffectsModule.forFeature([RoomEffects]),
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