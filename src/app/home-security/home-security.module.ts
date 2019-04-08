import { NgModule } from '@angular/core';
import { SecuritySystemComponent } from './security-system/security-system.component';
import { HomeSecurityRoutingModule } from './home-security.routing.module';
import { LocksComponent } from './locks/locks.component';
import { HomeSecurityComponent } from './home-security.component';

@NgModule({
    declarations: [
        HomeSecurityComponent,
        SecuritySystemComponent,
        LocksComponent
    ],
    imports: [ 
        HomeSecurityRoutingModule
     ],
    exports: [
    ],
    providers: [

    ],
})

export class HomeSecurityModule {}