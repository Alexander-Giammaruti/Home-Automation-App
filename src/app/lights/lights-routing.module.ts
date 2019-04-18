import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { LightsComponent } from './lights.component';
import { LightStarterComponent } from './light-starter/light-starter.component';
import { LightEditComponent } from './light-edit/light-edit.component';


const lightsRoutes: Routes = [
    {path: '', component: LightsComponent,
        children: [
            {path: '', component: LightStarterComponent},
            {path: 'new', component: LightEditComponent},
            {path: ':id', component: LightEditComponent},
            
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(lightsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class LightsRoutingModule {}