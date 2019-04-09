import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import * as fromLights from '../store/light.reducers'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-light-detail',
  templateUrl: './light-detail.component.html',
  styleUrls: ['./light-detail.component.css']
})
export class LightDetailComponent implements OnInit {

  lightState: Observable<fromLights.State>
  id: number;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private store: Store<fromLights.FeatureState>
      ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id=+params['id'];
        this.lightState = this.store.select('lights');
      }
    );
  }

}
