import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Bd } from '../../service/bd.service'; 
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable'
import { Produto } from '../../shared/Produto.model';
import { AngularFireStorage} from 'angularfire2/storage';
import { Url } from 'url';

@Component({
  selector: 'app-admin-produtos',
  templateUrl: './admin-produtos.component.html',
  styleUrls: ['./admin-produtos.component.css'],
  providers:[Bd, AngularFireStorage]
})
export class AdminProdutosComponent implements OnInit {

  private imagem:any;
  

  constructor(private bd:Bd) { }

  ngOnInit() {
  }


  public formulario:FormGroup = new FormGroup({
    'titulo': new FormControl(null),
    'cor':new FormControl(null),
    'dimensao': new FormControl(null),
    'composicao': new FormControl(null),
    'descricao':new FormControl(null),
  })



  
  public cadastraProduto():void{
    this.bd.cadastraProduto({
      titulo: this.formulario.value.titulo,
      cor: this.formulario.value.cor,
      dimensao: this.formulario.value.dimensao,
      capacidade: this.formulario.value.capacidade,
      imagem: this.imagem[0],
      descricao: this.formulario.value.descricao,
    });

    alert("Produto cadastrado com sucesso!")
    this.onSubmit();
   
  }


  onSubmit() {
    if (this.formulario.valid) {
      console.log("Form Submitted!");
      this.formulario.reset();
    }
  }


   preparaImagemUpload(event: Event):void {
    this.imagem= (<HTMLInputElement>event.target).files; 
   
}

}
