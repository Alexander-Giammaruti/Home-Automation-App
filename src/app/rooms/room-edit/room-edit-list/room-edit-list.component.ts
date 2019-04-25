import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoom from '../../store/room.reducers';



@Component({
  selector: 'app-room-edit-list',
  templateUrl: './room-edit-list.component.html',
  styleUrls: ['./room-edit-list.component.css']
})
export class RoomEditListComponent implements OnInit {

  roomState: Observable<fromRoom.State>

  constructor(
    private store: Store<fromRoom.FeatureState>
  ) { }

  ngOnInit() {
    this.roomState = this.store.select('rooms');
  }

}
