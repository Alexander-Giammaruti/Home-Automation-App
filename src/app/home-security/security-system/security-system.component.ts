import { Component, OnInit } from '@angular/core';
import { SecuritySystem } from './security-system.model';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromSecuritySystem from './store/security-system.reducers';
import * as SecuritySystemActions from './store/security-system.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-security-system',
  templateUrl: './security-system.component.html',
  styleUrls: ['./security-system.component.css']
})
export class SecuritySystemComponent implements OnInit {
  motionSensors: boolean;
  instantArm: boolean;


  securitySystemState: Observable<fromSecuritySystem.State>

  constructor(private store: Store<fromSecuritySystem.FeatureState>) { }

  ngOnInit() {
    this.securitySystemState = this.store.select('security-system');
  }

  onSubmit() {
    this.store.dispatch(new SecuritySystemActions.ArmSystem({instantArm: this.instantArm, motionSensors: this.motionSensors}));
  }

  //verification purposes
  // onChange() {
  //   console.log('Instant Arm: ' + this.securitySystem.armedState.settings.instantArm);
  //   console.log('Motion Sensors: ' + this.securitySystem.armedState.settings.motionSensors);
  // }
}
