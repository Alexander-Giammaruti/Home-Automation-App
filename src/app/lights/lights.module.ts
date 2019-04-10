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
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { LightReducer } from './store/light.reducers'
import { MatSliderModule, MatButtonModule, MatSlideToggleModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//THE MODULE
@NgModule({
    declarations: [
        LightsComponent,
        LightItemComponent,
        LightListComponent,
        LightStarterComponent,
        LightEditComponent,
        LightDetailComponent
    ],
    imports: [ 
        CommonModule,
        LightsRoutingModule,
        StoreModule.forFeature('lights', LightReducer),
        FormsModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatButtonModule,
        MatSlideToggleModule
    ],
    exports: [
        
    ],
    providers: [
        
    ],
})
export class LightsModule {}