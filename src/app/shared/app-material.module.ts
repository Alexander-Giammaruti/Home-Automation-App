import { NgModule } from '@angular/core';
import { MatSlider, MatButton } from '@angular/material';

@NgModule({
    declarations: [],
    imports: [ 
        MatSlider,
        MatButton
    ],
    exports: [
        MatSlider,
        MatButton
    ],
    providers: [],
})
export class AppMaterialModule {}