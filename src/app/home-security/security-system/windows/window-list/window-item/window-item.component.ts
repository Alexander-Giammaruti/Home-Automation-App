import { Component, OnInit, Input } from '@angular/core';
import { MyWindow } from 'src/app/home-security/shared/window.model';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-window-item',
  templateUrl: './window-item.component.html',
  styleUrls: ['./window-item.component.css']
})
export class WindowItemComponent implements OnInit {
  @Input() window: MyWindow;
  @Input() index: number;

  locked = new FormControl;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onEditWindow() {
    this.router.navigate(['windows', this.index, 'edit'], {relativeTo: this.route});
  }

}
