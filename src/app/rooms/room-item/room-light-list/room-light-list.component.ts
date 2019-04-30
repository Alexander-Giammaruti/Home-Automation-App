import { Component, OnInit } from '@angular/core';

import * as fromRoom from '../../store/room.reducers';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-room-light-list',
  templateUrl: './room-light-list.component.html',
  styleUrls: ['./room-light-list.component.css']
})
export class RoomLightListComponent implements OnInit {

  roomState: Observable<fromRoom.State>
  index: number;
  editmode: boolean = false;

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

  onAddEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    this.editmode = true;
  }

}
