import { Component, OnInit } from '@angular/core';
import { SecuritySystem } from './security-system.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-security-system',
  templateUrl: './security-system.component.html',
  styleUrls: ['./security-system.component.css']
})
export class SecuritySystemComponent implements OnInit {

  securitySystem = new SecuritySystem(
    'Sample Security System',
    {
      settings: 
      {
        instantArm: false,
        motionSensors: false
      },
      isArmed: false
    });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

  //verification purposes
  // onChange() {
  //   console.log('Instant Arm: ' + this.securitySystem.armedState.settings.instantArm);
  //   console.log('Motion Sensors: ' + this.securitySystem.armedState.settings.motionSensors);
  // }
}
