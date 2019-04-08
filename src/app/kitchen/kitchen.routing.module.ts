import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenComponent } from './kitchen.component';

const KitchenRoutes: Routes  = [
    {path: '', component: KitchenComponent,
        children: [
            
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(KitchenRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class KitchenRoutingModule {}