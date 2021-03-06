import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const authRoutes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: SigninComponent}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [RouterModule],
    providers: [],
})
export class AuthRoutingModule {

}