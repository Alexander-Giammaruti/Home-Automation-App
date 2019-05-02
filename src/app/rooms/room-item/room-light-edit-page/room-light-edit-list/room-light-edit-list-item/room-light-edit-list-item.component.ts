import { Component, OnInit, Input } from '@angular/core';
import { Light } from 'src/app/rooms/light.model';


@Component({
  selector: 'app-room-light-edit-list-item',
  templateUrl: './room-light-edit-list-item.component.html',
  styleUrls: ['./room-light-edit-list-item.component.css']
})
export class RoomLightEditListItemComponent implements OnInit {
  @Input() light: Light;
  @Input() index: number;
  @Input() roomIndex: number;


  constructor() { }

  ngOnInit() {}

}
