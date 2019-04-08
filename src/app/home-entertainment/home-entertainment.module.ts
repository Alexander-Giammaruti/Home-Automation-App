import { NgModule } from '@angular/core';
import { GameConsolesComponent } from './game-consoles/game-consoles.component';
import { HomeTheatreComponent } from './home-theatre/home-theatre.component';
import { TelivisionsComponent } from './telivisions/telivisions.component';
import { HomeEntertainmentRoutingModule } from './home-entertainment.routing.module';
import { HomeEntertainmentComponent } from './home-entertainment.component';

@NgModule({
    declarations: [
        HomeEntertainmentComponent,
        GameConsolesComponent,
        HomeTheatreComponent,
        TelivisionsComponent
    ],
    imports: [ 
        HomeEntertainmentRoutingModule
    ],
    exports: [
    ],
    providers: [],
})
export class HomeEntertainmentModule {}