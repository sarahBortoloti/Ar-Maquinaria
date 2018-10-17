import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Cliente} from '../../app/service/cliente.service';
import { ClienteContato } from '../shared/ClienteContato.model';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private cliente:Cliente) { }

  public formulario:FormGroup = new FormGroup({
    'nombre': new FormControl(null),
    'email': new FormControl(null),
    'telefono': new FormControl(null),
    'Movil':new FormControl(null),
    'Provincia': new FormControl(null),
    'Ciudad': new FormControl(null),
    'Tema': new FormControl(null),
    'Mensagen':new FormControl(null)
  })

  ngOnInit() {
  }

  public cadastrarClienteContato():void{
   // console.log(this.formulario);

    let clienteContato: ClienteContato = new ClienteContato(
      this.formulario.value.nombre,
      this.formulario.value.email,
      this.formulario.value.telefono,
      this.formulario.value.movil,
      this.formulario.value.provincia,
      this.formulario.value.ciudad,
      this.formulario.value.tema,
      this.formulario.value.mensagen

    )
    this.cliente.cadastrarClienteContato(clienteContato);
     alert("Mensagem enviada com sucesso! Em breve entramos em contato!")
    this.onSubmit();
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log("Formulário enviado com sucesso");
      this.formulario.reset();
    }
  }
}
