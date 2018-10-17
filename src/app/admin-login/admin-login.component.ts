import { Component, OnInit } from '@angular/core';
import { Admin_Login } from '../service/admin-login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from '../shared/Usuario.model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  private usuario:Usuario;
  constructor(private loginAdm : Admin_Login) { }

  ngOnInit() {
      
  }

  
  public formulario:FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })

  public autenticar():void{
    this.usuario = new Usuario(this.formulario.value.email, this.formulario.value.senha)
   // this.usuario = new Usuario(this.formulario.value.email, this.formulario.value.senha)
    this.loginAdm.autenticar(this.usuario.email, this.usuario.senha)
    console.log(this.usuario.email);
    console.log(this.usuario.senha);
  }

}
