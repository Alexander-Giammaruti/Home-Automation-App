import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-lock-edit',
  templateUrl: './lock-edit.component.html',
  styleUrls: ['./lock-edit.component.css']
})
export class LockEditComponent implements OnInit {
  id: number;
  lockForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
