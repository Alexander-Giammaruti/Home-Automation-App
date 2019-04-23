import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RoomsRoutingModule } from './rooms.routing.module';
import { RoomsComponent } from './rooms.component';
import { StoreModule } from '@ngrx/store';
import { RoomReducer } from './store/room.reducers';
import { MatSliderModule, MatButtonModule, MatSlideToggleModule } from '@angular/material';

@NgModule({
    declarations: [
        RoomsComponent
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