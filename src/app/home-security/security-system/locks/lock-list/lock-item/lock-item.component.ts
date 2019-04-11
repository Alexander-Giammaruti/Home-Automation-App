import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Lock } from 'src/app/home-security/shared/lock.model';


@Component({
  selector: 'app-lock-item',
  templateUrl: './lock-item.component.html',
  styleUrls: ['./lock-item.component.css']
})
export class LockItemComponent implements OnInit {
  @Input() lock: Lock;
  @Input() index: number;

  locked = new FormControl;
  editMode = false;

  ngOnInit() {
  }

  constructor(
  ) {}



}
