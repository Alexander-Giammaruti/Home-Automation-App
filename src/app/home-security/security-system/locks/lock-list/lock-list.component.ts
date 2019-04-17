import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromSecuritySystem from '../../store/security-system.reducers'
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lock-list',
  templateUrl: './lock-list.component.html',
  styleUrls: ['./lock-list.component.css']
})
export class LockListComponent implements OnInit {

  lockState: Observable<fromSecuritySystem.State>;

  constructor(
    private store: Store<fromSecuritySystem.FeatureState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.lockState = this.store.select('security-system');
  }

  onEditLock() {
    this.router.navigate(['security', 'locks', 'edit']);
  }


  

}
