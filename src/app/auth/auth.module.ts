import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth.routing.module';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './store/auth.reducers';
import { SecuritySystemReducer } from '../home-security/security-system/store/security-system.reducers';
import { LightReducer } from '../lights/store/light.reducers';


@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
    ],
    imports: [ 
        FormsModule,
        StoreModule.forFeature('auth', AuthReducer),
        StoreModule.forFeature('securitySystem', SecuritySystemReducer),
        StoreModule.forFeature('lights', LightReducer),
        AuthRoutingModule
    ],
    exports: [],
    providers: [],
})
export class AuthModule {

}