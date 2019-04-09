import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Store } from '@ngrx/store';

import { take } from 'rxjs/operators'

import * as fromLight from '../store/light.reducers';
import * as lightActions from '../store/light.actions';

@Component({
  selector: 'app-light-edit',
  templateUrl: './light-edit.component.html',
  styleUrls: ['./light-edit.component.css']
})
export class LightEditComponent implements OnInit {
  id: number;
  editMode = false;
  lightForm: FormGroup;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private store: Store<fromLight.FeatureState>
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  private initForm(){
    let lightName = '';
    let lightDescription = '';

    if(this.editMode) {
      //edit mode is activated... probably editing an already existing light
      //should grab the light from the light reducer and populate the form for use of editing
      this.store.select('lights')
        .pipe(take(1))
        .subscribe((lightState: fromLight.State) => {
          const light = lightState.lights[this.id];
          lightName = light.name;
          lightDescription = light.description;
        })
    }

    this.lightForm = new FormGroup({
      'name': new FormControl(lightName, [Validators.required]),
      'description': new FormControl(lightDescription, [Validators.required])
    })
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  
  onSubmit() {
    if(this.editMode){
      this.store.dispatch(new lightActions.UpdateLight(
        {index: this.id, updatedLight: this.lightForm.value}));
    } else {
      this.store.dispatch(new lightActions.AddLight(this.lightForm.value));
    }
    this.onCancel();
  }
}
