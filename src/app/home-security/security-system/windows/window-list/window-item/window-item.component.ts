import { Component, OnInit, Input } from '@angular/core';
import { MyWindow } from 'src/app/home-security/shared/window.model';

import * as fromSecuritySystem from '../../../store/security-system.reducers';
import * as SecuritySystemActions from '../../../store/security-system.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-window-item',
  templateUrl: './window-item.component.html',
  styleUrls: ['./window-item.component.css']
})
export class WindowItemComponent implements OnInit {
  @Input() window: MyWindow;
  @Input() index: number;
  @Input() locked: boolean;

  constructor(
    private store: Store<fromSecuritySystem.FeatureState>
  ) { }

  ngOnInit() {
  }

  onLock() {
    this.window.lockedState = this.locked;
    this.store.dispatch(new SecuritySystemActions.LockWindow(this.index));
  }
}
