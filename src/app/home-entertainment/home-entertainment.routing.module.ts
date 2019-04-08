import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEntertainmentComponent } from './home-entertainment.component';

const HomeEntertainmentRoutes: Routes  = [
    {path: '', component: HomeEntertainmentComponent,
        children: [
            
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(HomeEntertainmentRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeEntertainmentRoutingModule {}