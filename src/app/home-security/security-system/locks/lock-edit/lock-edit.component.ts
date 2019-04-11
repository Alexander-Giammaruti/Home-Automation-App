import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromLock from '../store/lock.reducers';
import * as LockActions from '../store/lock.actions'
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-lock-edit',
  templateUrl: './lock-edit.component.html',
  styleUrls: ['./lock-edit.component.css']
})
export class LockEditComponent implements OnInit {
  id: number;
  lockForm: FormGroup;

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
    let lockName = '';
    let lockLocked = false;
    //let lockTimer = null;

    if(this.editMode) {
      this.store.select('locks')
      .pipe(take(1))
      .subscribe((lockState: fromLock.State) => {
        const lock = lockState.locks[this.id];
        lockName = lock.name;
        lockLocked = lock.lockedState;
      })
    }

    this.lockForm = new FormGroup({
      'name': new FormControl(lockName, [Validators.required]),
      'lockedState': new FormControl(lockLocked)
      
    })
  }

}
