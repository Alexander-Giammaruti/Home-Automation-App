//angular stuff
import { NgModule } from '@angular/core';

// my stuff
import { LightItemComponent } from './light-list/light-item/light-item.component';
import { LightListComponent } from './light-list/light-list.component';
import { LightStarterComponent } from './light-starter/light-starter.component';
import { LightEditComponent } from './light-edit/light-edit.component';
import { LightDetailComponent } from './light-detail/light-detail.component';
import { LightsComponent } from './lights.component';
import { LightsRoutingModule } from './lights-routing.module';

//THE MODULE
@NgModule({
    declarations: [
        LightsComponent,
        LightItemComponent,
        LightListComponent,
        LightStarterComponent,
        LightEditComponent,
        LightDetailComponent,
    ],
    imports: [ 
        LightsRoutingModule
    ],
    exports: [
        LightsComponent,
        LightItemComponent
    ],
    providers: [
        
    ],
})
export class LightsModule {}