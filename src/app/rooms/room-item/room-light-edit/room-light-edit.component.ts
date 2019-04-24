import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoom from '../../store/room.reducers';
import * as RoomActions from '../../store/room.actions';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';
import { LightDetailComponent } from 'src/app/lights/light-detail/light-detail.component';


@Component({
  selector: 'app-room-light-edit',
  templateUrl: './room-light-edit.component.html',
  styleUrls: ['./room-light-edit.component.css']
})
export class RoomLightEditComponent implements OnInit {

  roomID: number;
  lightID: number;
  editMode: boolean = false;
  lightForm: FormGroup;
  lightName: string;

  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRoom.FeatureState>
  ) { }

  ngOnInit() {
    this.roomID = +this.route.snapshot.params['id'];
    this.route.paramMap.subscribe(params => {
      this.roomID = +params.get('id');
      this.lightID = +params.get('lightid');
      this.editMode = params.get('lightid') != null;
      console.log(this.editMode)
    })
    this.initForm();
    
  }

  private initForm() {
    let lightName = '';
    let lightDescription = '';

    if(this.editMode) {
      //edit mode is activated... probably editing an already existing light
      //should grab the light from the light reducer and populate the form for use of editing
      this.store.select('rooms')
        .pipe(take(1))
        .subscribe((roomState: fromRoom.State) => {
          const light = roomState.rooms[this.roomID].lights[this.lightID];
          lightName = light.name;
          this.lightName = lightName;
          lightDescription = light.description;
        })
    }

    this.lightForm = new FormGroup({
      'name': new FormControl(lightName, [Validators.required]),
      'description': new FormControl(lightDescription, [Validators.required])
    })
  }

  onCancel() {
    this.router.navigate(['homecontrol', this.roomID]);
  }

  onDeleteLight() {
    this.store.dispatch(new RoomActions.DeleteLight({roomIndex: this.roomID, lightIndex: this.lightID}));
    this.router.navigate(['homecontrol', this.roomID]);
  }

  onSubmit() {
    if(this.editMode) {
      
    } else {
      this.store.dispatch(new RoomActions.AddLight({roomIndex: this.roomID, light: this.lightForm.value}))
    }
  }
    

}
