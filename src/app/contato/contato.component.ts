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
    'nome': new FormControl(null),
    'email': new FormControl(null),
    'telefone': new FormControl(null),
    'celular':new FormControl(null),
    'provincia': new FormControl(null),
    'cidade': new FormControl(null),
    'assunto': new FormControl(null),
    'mensagem':new FormControl(null)
  })

  ngOnInit() {
  }

  public cadastrarClienteContato():void{
   // console.log(this.formulario);

    let clienteContato: ClienteContato = new ClienteContato(
      this.formulario.value.nome,
      this.formulario.value.email,
      this.formulario.value.telefone,
      this.formulario.value.celular,
      this.formulario.value.provincia,
      this.formulario.value.cidade,
      this.formulario.value.mensagem

    )
    this.cliente.cadastrarClienteContato(clienteContato);
   alert("Mensagem enviada com sucesso! Em breve entramos em contato!")
    this.onSubmit();
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log("Form Submitted!");
      this.formulario.reset();
    }
  }
}
