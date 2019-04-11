import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromWindow from '../store/window.reducers'
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-window-list',
  templateUrl: './window-list.component.html',
  styleUrls: ['./window-list.component.css']
})
export class WindowListComponent implements OnInit {

  windowState: Observable<fromWindow.State>

  constructor(
    private store: Store<fromWindow.FeatureState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.windowState = this.store.select('windows');
  }

  onNewWindow(){
    this.router.navigate(['windows', 'new'], {relativeTo: this.route});
  }

}
