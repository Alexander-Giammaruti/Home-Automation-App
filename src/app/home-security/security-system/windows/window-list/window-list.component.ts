import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromSecuritySystem from '../../store/security-system.reducers'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-window-list',
  templateUrl: './window-list.component.html',
  styleUrls: ['./window-list.component.css']
})
export class WindowListComponent implements OnInit {

  windowState: Observable<fromSecuritySystem.State>

  constructor(
    private store: Store<fromSecuritySystem.FeatureState>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.windowState = this.store.select('security-system');
  }

  onNewWindow(){
    this.router.navigate(['security', 'windows', 'edit']);
  }

}
