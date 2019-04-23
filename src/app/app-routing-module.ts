//this file is just a dummy and will be modified heavily once components are set up

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'lights', loadChildren: './lights/lights.module#LightsModule'},
    {path: 'security', loadChildren: './home-security/home-security.module#HomeSecurityModule'},
    {path: 'entertainment', loadChildren: './home-entertainment/home-entertainment.module#HomeEntertainmentModule'},
    {path: 'cleaning', loadChildren: './home-cleaning/home-cleaning.module#HomeCleaningModule'},
    {path: 'kitchen', loadChildren: './kitchen/kitchen.module#KitchenModule'},
    {path: 'outdoor', loadChildren: './outdoor/outdoor.module#OutdoorModule'}
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