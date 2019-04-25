import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room.model';
import { Observable } from 'rxjs';

import * as fromRoom from '../store/room.reducers';
import { Store } from '@ngrx/store';
import { Light } from '../light.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {
  @Input() room: Room;
  @Input() light: Light;
  index: number;
  
  roomState: Observable<fromRoom.State>

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRoom.FeatureState>
  ) { }

  ngOnInit() {
    this.roomState = this.store.select('rooms');
    this.route.params.subscribe(
      (params: Params) => {
        this.index = params.id;
      }
    )
  }

}
