//angular stuff
import { NgModule } from '@angular/core';

// my stuff
import { OutdoorComponent } from './outdoor.component';
import { OutdoorRoutingModule } from './outdoor.routing.module';
import { GrillsComponent } from './grills/grills.component';
import { PoolsComponent } from './pools/pools.component';
import { SprinkersComponent } from './sprinkers/sprinkers.component';

//THE MODULE
@NgModule({
    declarations: [
        OutdoorComponent,
        GrillsComponent,
        PoolsComponent,
        SprinkersComponent
    ],
    imports: [ 
        OutdoorRoutingModule
    ],
    exports: [
        
    ],
    providers: [
        
    ],
})
export class OutdoorModule {}