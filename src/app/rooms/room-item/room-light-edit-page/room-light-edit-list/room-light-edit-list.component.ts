import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoom from '../../../store/room.reducers';

@Component({
  selector: 'app-room-light-edit-list',
  templateUrl: './room-light-edit-list.component.html',
  styleUrls: ['./room-light-edit-list.component.css']
})
export class RoomLightEditListComponent implements OnInit {

  roomState: Observable<fromRoom.State>
  index: number;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRoom.FeatureState>
  ) { }

  ngOnInit() {
    this.roomState = this.store.select('rooms');
    this.route.params.subscribe(
      (params: Params) => {
        this.index = params.id
      }
    )
  }

}
