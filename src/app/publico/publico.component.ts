import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { Admin_Login } from '../service/admin-login.service';

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent implements OnInit {      
  constructor(private router: Router) { }

  ngOnInit() {
  }

  isValid(): boolean {
    if ((this.router.url == '/admin') || (this.router.url == '/menu') || (this.router.url == '/menu/cadastra-produtos') || (this.router.url == '/menu/cadastra-banners') || (this.router.url == '/menu/lista-produtos') || (this.router.url == '/menu/lista-banners')){
              return false;
      }
    return true;
  }
}
