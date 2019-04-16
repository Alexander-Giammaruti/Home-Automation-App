import { Component, OnInit, Input } from '@angular/core';

import { Lock } from 'src/app/home-security/shared/lock.model';
import { Store } from '@ngrx/store';

import * as fromSecuritySystem from '../../../store/security-system.reducers';
import * as SecuritySystemActions from '../../../store/security-system.actions';

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
    private store: Store<fromSecuritySystem.FeatureState>
  ) {}

  onLock() {
    this.lock.lockedState = this.locked;
    this.store.dispatch(new SecuritySystemActions.LockLock(this.index));
  }



}
