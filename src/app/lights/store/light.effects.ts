import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { Light } from '../light.model';

import * as fromLight from './light.reducers';
import * as LightActions from './light.actions';
import * as fromAuth from '../../auth/store/auth.reducers';



@Injectable()
export class LightEffects {
    @Effect()
    lightGet = this.actions$
    .pipe(ofType(LightActions.GET_LIGHTS))
    .pipe(switchMap((action: LightActions.GetLights) => {
        return this.http.get<Light[]>('https://ng-home-automation.firebaseio.com/'+ firebase.auth().currentUser.uid  + '/lights.json', {
            observe: 'body',
            responseType: 'json'
        })
    }))
    .pipe(map(
        (lights) => {
            return {
                type: LightActions.SET_LIGHTS,
                payload: lights
            };
        }));

    @Effect({dispatch: false})
    lightStore = this.actions$
        .pipe(ofType(LightActions.STORE_LIGHTS))
        .pipe(withLatestFrom(this.store.select('lights')))
        .pipe(switchMap(([action, state]) => {
            const req = new HttpRequest('PUT', 'https://ng-home-automation.firebaseio.com/' + firebase.auth().currentUser.uid + '/lights.json', state.lights, {
               reportProgress: true 
            })
            return this.http.request(req);
        }));

    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromLight.FeatureState>,
    ) {}
}

