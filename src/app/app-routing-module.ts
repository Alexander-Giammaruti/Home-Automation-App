//this file is just a dummy and will be modified heavily once components are set up

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, ExtraOptions } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'homecontrol', loadChildren: './rooms/rooms.module#RoomsModule'},
    {path: 'security', loadChildren: './home-security/home-security.module#HomeSecurityModule'}
];



@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, paramsInheritanceStrategy: 'always'})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}