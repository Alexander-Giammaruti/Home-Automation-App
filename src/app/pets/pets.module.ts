//angular stuff
import { NgModule } from '@angular/core';

// my stuff
import { PetsComponent } from './pets.component';
import { PetsRoutingModule } from './pets.routing.module';

//THE MODULE
@NgModule({
    declarations: [
        PetsComponent
    ],
    imports: [ 
        PetsRoutingModule
    ],
    exports: [
        
    ],
    providers: [
        
    ],
})
export class PetsModule {}