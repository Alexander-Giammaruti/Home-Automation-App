import { NgModule } from '@angular/core';
import { KitchenComponent } from './kitchen.component';
import { CrockPotsComponent } from './crock-pots/crock-pots.component';
import { InstantPotsComponent } from './instant-pots/instant-pots.component';
import { RefrigeratorsComponent } from './refrigerators/refrigerators.component';
import { KitchenOthersComponent } from './others/others.component';
import { KitchenRoutingModule } from './kitchen.routing.module';

@NgModule({
    declarations: [
        KitchenComponent,
        CrockPotsComponent,
        InstantPotsComponent,
        RefrigeratorsComponent,
        KitchenOthersComponent
    ],
    imports: [ 
        KitchenRoutingModule
    ],
    exports: [
    ],
    providers: [],
})
export class KitchenModule {}