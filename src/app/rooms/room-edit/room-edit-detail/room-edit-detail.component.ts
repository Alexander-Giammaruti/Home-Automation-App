import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import * as fromRoom from '../../store/room.reducers';
import * as RoomActions from '../../store/room.actions';

@Component({
  selector: 'app-room-edit-detail',
  templateUrl: './room-edit-detail.component.html',
  styleUrls: ['./room-edit-detail.component.css']
})
export class RoomEditDetailComponent implements OnInit {
  id: number;
  roomForm: FormGroup;
  name: string;

  editMode = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRoom.FeatureState>
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm()
      }
    )
  }

  private initForm() {
    let name = '';
    if(this.editMode) {
      this.store.select('rooms')
      .pipe(take(1))
      .subscribe((roomState: fromRoom.State) => {
        const room = roomState.rooms[this.id];
        name = room.name;
        this.name = room.name;
      })
    }
    this.roomForm = new FormGroup({
      'name': new FormControl(name, [Validators.required])
    })
  }

  onCancel() {
    this.router.navigate(['homecontrol']);
  }

  onDelete() {
    this.store.dispatch(new RoomActions.DeleteRoom(this.id));
    this.router.navigate(['homecontrol', 'edit']);
  }

  onSubmit() {
    if(this.editMode) {
      this.store.dispatch(new RoomActions.UpdateRoom({index: this.id, updatedRoom: this.roomForm.value}));
    } else {
      this.store.dispatch(new RoomActions.AddRoom(this.roomForm.value));
    }
    this.onCancel();
  }
}
