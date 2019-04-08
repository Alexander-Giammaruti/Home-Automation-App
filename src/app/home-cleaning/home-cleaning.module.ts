import { NgModule } from '@angular/core';

import { HomeCleaningComponent } from './home-cleaning.component';
import { RoombasComponent } from './roombas/roombas.component';
import { HomeCleaningRoutingModule } from './home-cleaning.routing.module';

@NgModule({
    declarations: [
        HomeCleaningComponent,
        RoombasComponent,
    ],
    imports: [ 
        HomeCleaningRoutingModule
    ],
    exports: [
    ],
    providers: [],
})
export class HomeCleaningModule {}