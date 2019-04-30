import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as fromRoom from '../store/room.reducers';
import * as RoomActions from '../store/room.actions';

import * as firebase from 'firebase/app';
import 'firebase/auth';


import { Room } from '../room.model';

@Injectable()
export class RoomEffects {
    @Effect()
    roomGet = this.actions$
    .pipe(ofType(RoomActions.GET_ROOMS))
    .pipe(switchMap((action: RoomActions.GetRooms) => {
        return this.http.get<Room[]>('https://ng-home-automation.firebaseio.com/rooms/' + firebase.auth().currentUser.uid  + '.json', {
            observe: 'body',
            responseType: 'json'
        })
    }))
    .pipe(map(
        (rooms) => {
        return {
            type: RoomActions.SET_ROOMS,
            payload: rooms
        };
    }));

    @Effect({dispatch: false})
    roomStore = this.actions$
    .pipe(ofType(RoomActions.STORE_ROOMS))
    .pipe(withLatestFrom(this.store.select('rooms')))
    .pipe(switchMap(([action, state]) => {
        const req = new HttpRequest('PUT', 'https://ng-home-automation.firebaseio.com/rooms/' + firebase.auth().currentUser.uid + '.json', state, {
            reportProgress: true 
         })
         return this.http.request(req);
    }))



    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromRoom.FeatureState>
    ) {}
}