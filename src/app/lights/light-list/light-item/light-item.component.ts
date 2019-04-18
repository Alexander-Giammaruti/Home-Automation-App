import { Component, OnInit, Input } from '@angular/core';
import { Light } from '../../light.model';
import { Store } from '@ngrx/store';

import * as fromLight from '../../store/light.reducers';
import * as LightActions from '../../store/light.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-light-item',
  templateUrl: './light-item.component.html',
  styleUrls: ['./light-item.component.css']
})
export class LightItemComponent implements OnInit {
  @Input() light: Light;
  @Input() index: number;
  @Input() onOff: boolean;
  
  lightState: Observable<fromLight.State>  

  constructor(
    private store: Store<fromLight.FeatureState>
  ) { }

  ngOnInit() {
    this.lightState = this.store.select('lights');
  }

  onToggle() {
    this.light.powered.on = this.onOff;
    this.light.powered.brightness = 1;
    this.store.dispatch(new LightActions.TogglePower(this.index));
  }

}
