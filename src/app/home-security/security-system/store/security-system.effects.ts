import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import * as fromSecuritySystem from './security-system.reducers';
import * as SecuritySystemActions from './security-system.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { SecuritySystem } from '../security-system.model';

@Injectable()
export class SecuritySystemEffects {
    @Effect()
    securitySystemGet = this.actions$
    .pipe(ofType(SecuritySystemActions.GET_SECURITY_SYSTEM))
    .pipe(switchMap((action: SecuritySystemActions.GetSecuritySystem) => {
        return this.http.get<SecuritySystem>('https://ng-home-automation.firebaseio.com/security-system/' + firebase.auth().currentUser.uid  + '.json', {
            observe: 'body',
            responseType: 'json'
        })
    }))
    .pipe(map(
        (securitySystem) => {
            return {
                type: SecuritySystemActions.SET_SYSTEM,
                payload: securitySystem
            };
        }));

    @Effect({dispatch: false})
    securitySystemStore = this.actions$
    .pipe(ofType(SecuritySystemActions.STORE_SECURITY_SYSTEM))
    .pipe(withLatestFrom(this.store.select('security-system')))
    .pipe(switchMap(([action, state]) => {
        const req = new HttpRequest('PUT', 'https://ng-home-automation.firebaseio.com/security-system/' + firebase.auth().currentUser.uid + '.json', state, {
            reportProgress: true 
         })
         return this.http.request(req);
    }));


    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromSecuritySystem.FeatureState>
    ) {}
}