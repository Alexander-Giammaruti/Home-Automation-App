import { Component, OnInit, Input } from '@angular/core';
import { Light } from '../../light.model';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-light-item',
  templateUrl: './light-item.component.html',
  styleUrls: ['./light-item.component.css']
})
export class LightItemComponent implements OnInit {
  @Input() light: Light;
  @Input() index: number;
  
  power = new FormControl;
  

  constructor(
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.light.brightness = 1;
    
  }

  onEditLight() {
    this.router.navigate([this.index, 'edit'], {relativeTo: this.route});
  }

}
