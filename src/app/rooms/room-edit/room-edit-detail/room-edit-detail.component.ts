import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoom from '../../store/room.reducers';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-room-edit-detail',
  templateUrl: './room-edit-detail.component.html',
  styleUrls: ['./room-edit-detail.component.css']
})
export class RoomEditDetailComponent implements OnInit {
  id: number;
  roomForm: FormGroup;
  roomName: string;

  editMode = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRoom.FeatureState>
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log(params['id'])
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm()
      }
    )
  }

  private initForm() {
    let roomName = '';

    if(this.editMode) {
      this.store.select('rooms')
      .pipe(take(1))
      .subscribe((roomState: fromRoom.State) => {
        const room = roomState.rooms[this.id];
        roomName = room.name;
        this.roomName = room.name;
      })
    }

    this.roomForm = new FormGroup({
      'roomName': new FormControl(roomName, [Validators.required])
    })
  }

}
