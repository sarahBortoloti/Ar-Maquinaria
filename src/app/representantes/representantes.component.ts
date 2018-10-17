import { Component, OnInit } from '@angular/core';
import { Cliente } from '../service/cliente.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ClienteRepresentante } from '../shared/ClienteRepresentante.model';
import * as $ from 'jquery/dist/jquery.min.js';
@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrls: ['./representantes.component.css']
})
export class RepresentantesComponent implements OnInit {


  constructor(private cliente: Cliente) { }

  public formulario:FormGroup = new FormGroup({
    'nome': new FormControl(null),
    'email': new FormControl(null),
    'telefone': new FormControl(null),
    'estado': new FormControl(null),
    'cidade': new FormControl(null),
    'estadoRepresentante':new FormControl(null)
  })


  public cadastrarClienteRepresentante():void{
    // console.log(this.formulario);
 
     let clienteRepresentante: ClienteRepresentante = new ClienteRepresentante(
       this.formulario.value.nome,
       this.formulario.value.email,
       this.formulario.value.telefone,
       this.formulario.value.estado,
       this.formulario.value.cidade,
       this.formulario.value.estado,
 
     )
     this.cliente.cadastrarClienteRepresentante(clienteRepresentante);
     alert("Registro enviado com sucesso, em breve entraremos em contato!")
     this.onSubmit();
     }
  
   onSubmit() {
    if (this.formulario.valid) {
      console.log("Form Submitted!");
      this.formulario.reset();
    }
  }

  ngOnInit() {
    $(function () {
      function moveUpestado(thisObject) {
        thisObject.appendTo(thisObject.parents('svg>g>a'));
      }
  
      $('.mapa-svg-estados').click(function () {
        $(this).siblings().removeClass('mapa-svg-estados-active');
        $(this).addClass('mapa-svg-estados-active');
        $('.class-select').val($(this).attr('id')).trigger('change');
        moveUpestado($(this));
      });
  
      $('.class-select > option').each(function () {
        $(this).addClass($(this).attr('value'));
      });
  
      $('.class-select').change(function () {
        $('.' + $(this).val() + '-class').siblings().removeClass('mapa-svg-estados-active');
        $('.' + $(this).val() + '-class').addClass('mapa-svg-estados-active');
        moveUpestado($('.' + $(this).val() + '-class'));
      });
  
    });

  


  }


  

}
