import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PetsComponent } from './pets.component';




const outdoorRoutes: Routes = [
    {path: '', component: PetsComponent,
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

export class PetsRoutingModule {}