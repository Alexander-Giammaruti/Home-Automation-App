//this file is just a dummy and will be modified heavily once components are set up

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LightsComponent } from './lights/lights.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'lights', component: LightsComponent},
    //{path: 'electronics', loadChildren: './lights/electronics.module#ElectronicsModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}