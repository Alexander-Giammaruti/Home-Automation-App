import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoom from './store/room.reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  roomState: Observable<fromRoom.State>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRoom.FeatureState>
  ) { }

  ngOnInit() {
    this.roomState = this.store.select('rooms');
  }

}
