import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromLock from '../store/lock.reducers'
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lock-list',
  templateUrl: './lock-list.component.html',
  styleUrls: ['./lock-list.component.css']
})
export class LockListComponent implements OnInit {

  lockState: Observable<fromLock.State>;

  constructor(
    private store: Store<fromLock.FeatureState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.lockState = this.store.select('locks');
  }

  onLock() {
    this.router.navigate(['security', 'locks', 'edit']);
  }


  

}
