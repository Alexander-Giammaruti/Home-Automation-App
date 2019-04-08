import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSecurityComponent } from './home-security.component';

const HomeSecurityRoutes: Routes  = [
    {path: '', component: HomeSecurityComponent,
        children: [
            
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(HomeSecurityRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeSecurityRoutingModule {}