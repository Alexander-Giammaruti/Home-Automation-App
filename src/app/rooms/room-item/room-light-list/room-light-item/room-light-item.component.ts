import { Component, OnInit, Input } from '@angular/core';
import { Light } from 'src/app/lights/light.model';

import * as fromRoom from '../../../store/room.reducers';
import * as RoomActions from '../../../store/room.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room-light-item',
  templateUrl: './room-light-item.component.html',
  styleUrls: ['./room-light-item.component.css']
})
export class RoomLightItemComponent implements OnInit {
  @Input() light: Light;
  @Input() index: number;
  @Input() roomIndex: number;
  @Input() power: boolean;

  roomState: Observable<fromRoom.State>

  constructor(
    private store: Store<fromRoom.FeatureState>
  ) { }

  ngOnInit() {
    this.roomState = this.store.select('rooms');
  }

  onToggle() {
    this.store.dispatch(new RoomActions.TogglePower({roomIndex: this.roomIndex, lightIndex: this.index}))
  }
}
