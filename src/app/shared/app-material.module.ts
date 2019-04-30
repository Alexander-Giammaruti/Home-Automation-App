import { NgModule } from '@angular/core';
import { MatSlider, MatButton, MatSliderModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [],
    imports: [ 
        MatSliderModule,
        MatButtonModule
    ],
    exports: [
        MatSlider,
        MatButton
    ],
    providers: [],
})
export class AppMaterialModule {}