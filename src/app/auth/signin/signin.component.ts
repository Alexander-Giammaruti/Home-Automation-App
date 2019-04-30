import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers'
import * as AuthActions from '../store/auth.actions'

import * as fromSecurity from '../../home-security/security-system/store/security-system.reducers';
//import * as SecuritySystemActions from '../../home-security/security-system/store/security-system.actions';

//import * as LightActions from '../../lights/store/light.actions';


//import * as firebase from 'firebase/app';
//import 'firebase/auth';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignin({email: email, password: password}));
    // need to figure a way to wait for the login to succeed/fail then...
      // load user data if successful
      // don't if unsuccessful
    
    // if(firebase.auth().currentUser.email === email) {
    //   this.securityStore.dispatch(new SecuritySystemActions.GetSecuritySystem());
    //   this.lightStore.dispatch(new LightActions.GetLights());
    // }
    
  }
}
