import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromSecuritySystem from '../../../store/security-system.reducers';
import * as SecuritySystemActions from '../../../store/security-system.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-window-edit-detail',
  templateUrl: './window-edit-detail.component.html',
  styleUrls: ['./window-edit-detail.component.css']
})
export class WindowEditDetailComponent implements OnInit {

  id: number;
  windowForm: FormGroup;
  windowName: string;

  editMode = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromSecuritySystem.FeatureState>
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  private initForm() {
    

    if(this.editMode) {

      this.store.select('security-system')
        .pipe(take(1))
        .subscribe((securitySysyemState: fromSecuritySystem.State) => {
          const window = securitySysyemState.windows[this.id];
          this.windowName = window.name;
        })
    }

    this.windowForm = new FormGroup({
      'name': new FormControl(this.windowName, [Validators.required])
    })
  }

  onCancel() {
    this.router.navigate(['security']);
  }

  onDeleteWindow() {
    this.store.dispatch(new SecuritySystemActions.DeleteWindow(this.id));
    this.router.navigate(['security', 'windows', 'edit']);
  }

  onSubmit() {
    if(this.editMode) {
      this.store.dispatch(new SecuritySystemActions.UpdateWindow(
        {index: this.id, updatedWindow: this.windowForm.value}));
    } else {
      this.store.dispatch(new SecuritySystemActions.AddWindow(this.windowForm.value));
    }
    this.onCancel();
  }
}
