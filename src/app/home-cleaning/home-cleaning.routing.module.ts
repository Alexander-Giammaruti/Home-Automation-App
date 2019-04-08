import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCleaningComponent } from './home-cleaning.component';

const HomeCleaningRoutes: Routes  = [
    {path: '', component: HomeCleaningComponent,
        children: [
            
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(HomeCleaningRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeCleaningRoutingModule {}