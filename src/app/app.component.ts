import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    var config = {
      apiKey: "AIzaSyC8xWnmzHQAgx-qerOL1NmN-dRX5jPQ3Vo",
      authDomain: "ng-home-automation.firebaseapp.com",
      databaseURL: "https://ng-home-automation.firebaseio.com",
      projectId: "ng-home-automation",
      storageBucket: "ng-home-automation.appspot.com",
      messagingSenderId: "184860070358"
    };
    firebase.initializeApp(config);
  }
}
