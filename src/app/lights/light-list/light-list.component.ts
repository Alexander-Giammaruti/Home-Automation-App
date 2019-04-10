import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromLight from '../store/light.reducers'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-light-list',
  templateUrl: './light-list.component.html',
  styleUrls: ['./light-list.component.css']
})
export class LightListComponent implements OnInit {
  
  lightState: Observable<fromLight.State>;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromLight.FeatureState>) { }

  ngOnInit() {

    this.lightState = this.store.select('lights');
  }

  onNewLight() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
