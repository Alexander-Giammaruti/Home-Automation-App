import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-light-list',
  templateUrl: './light-list.component.html',
  styleUrls: ['./light-list.component.css']
})
export class LightListComponent implements OnInit {
  

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onNewLight() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
