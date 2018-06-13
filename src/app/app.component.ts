import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 loadedFeature = 'recipe';
 
 ngOnInit() {
   firebase.initializeApp({
    apiKey: "AIzaSyBlU5uiEUE4N-SyQ5gOzzLXb_V8Zc_Lrro",
    authDomain: "ng-recipe-book-dce87.firebaseapp.com",
   })
 }
  onNavigate(feature: string) {
 this.loadedFeature = feature;
  }
}
