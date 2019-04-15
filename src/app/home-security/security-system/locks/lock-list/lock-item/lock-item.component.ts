import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Lock } from 'src/app/home-security/shared/lock.model';
import { Store } from '@ngrx/store';

import * as fromLock from '../../store/lock.reducers';
import * as LockActions from '../../store/lock.actions';

@Component({
  selector: 'app-lock-item',
  templateUrl: './lock-item.component.html',
  styleUrls: ['./lock-item.component.css']
})
export class LockItemComponent implements OnInit {
  @Input() lock: Lock;
  @Input() index: number;
  @Input() locked: boolean;

  editMode = false;

  ngOnInit() {
  }

  constructor(
    private store: Store<fromLock.FeatureState>
  ) {}

  onLock() {
    this.lock.lockedState = this.locked;
    this.store.dispatch(new LockActions.LockLock(this.index));
  }



}
