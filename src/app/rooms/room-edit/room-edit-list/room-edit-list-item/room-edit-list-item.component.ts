import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Room } from 'src/app/rooms/room.model';
import * as fromRoom from '../../../store/room.reducers';

@Component({
  selector: 'app-room-edit-list-item',
  templateUrl: './room-edit-list-item.component.html',
  styleUrls: ['./room-edit-list-item.component.css']
})
export class RoomEditListItemComponent implements OnInit {
  @Input() room: Room;
  @Input() index: number;

  roomState: Observable<fromRoom.State>

  constructor(
    private store: Store<fromRoom.FeatureState>
  ) { }

  ngOnInit() {
    this.roomState = this.store.select('rooms');
  }

}
