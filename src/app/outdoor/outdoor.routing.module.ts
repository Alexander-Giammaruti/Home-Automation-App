import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { OutdoorComponent } from './outdoor.component';




const outdoorRoutes: Routes = [
    {path: '', component: OutdoorComponent,
        children: [
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(outdoorRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class OutdoorRoutingModule {}