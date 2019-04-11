import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { Store } from '@ngrx/store';

import * as fromLock from '../../store/lock.reducers';
import * as LockActions from '../../store/lock.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-lock-edit-detail',
  templateUrl: './lock-edit-detail.component.html',
  styleUrls: ['./lock-edit-detail.component.css']
})
export class LockEditDetailComponent implements OnInit {

  id: number;
  lockForm: FormGroup;
  lockName: string;

  editMode = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromLock.FeatureState>
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

  private initForm() {
    

    if(this.editMode) {

      this.store.select('locks')
        .pipe(take(1))
        .subscribe((lockState: fromLock.State) => {
          const lock = lockState.locks[this.id];
          this.lockName = lock.name;
        })
    }

    this.lockForm = new FormGroup({
      'name': new FormControl(this.lockName, [Validators.required])
    })
  }

  onCancel() {
    this.router.navigate(['security']);
  }

  onDeleteLock() {
    this.store.dispatch(new LockActions.DeleteLock(this.id));
    this.router.navigate(['security', 'locks', 'edit']);
  }

  onSubmit() {
    if(this.editMode){
      this.store.dispatch(new LockActions.UpdateLock(
        {index: this.id, updatedLock: this.lockForm.value}));
    } else {
      this.store.dispatch(new LockActions.AddLock(this.lockForm.value));
    }
    this.onCancel();
  }
}
