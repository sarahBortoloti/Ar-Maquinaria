import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

     let config = {
    apiKey: "AIzaSyAu0rk4CIAI_JCnDBIQZiLVhaH8URTZ7Z8",
    authDomain: "armaquinaria-ec.firebaseapp.com",
    databaseURL: "https://armaquinaria-ec.firebaseio.com",
    projectId: "armaquinaria-ec",
    storageBucket: "armaquinaria-ec.appspot.com",
    messagingSenderId: "5449443933"

    }
    firebase.initializeApp(config);

  }


  
  constructor(public route:Router){

  }

  title = 'AR Maquinaria';
  

}

