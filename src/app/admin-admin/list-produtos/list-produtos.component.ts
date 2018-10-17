import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bd } from '../../service/bd.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})
export class ListProdutosComponent implements OnInit {

  public produtos: Observable<any[]>

  constructor(private bd: Bd, private router:Router) { }
  currentRoute:string = this.router.url;
  ngOnInit() {
    this.consultaProdutos();
   // this.produtos = this.bd.getProdutos();
    console.log(this.router.url)
  } 

  
  public consultaProdutos(): void {
    this.bd.listProdutos()
      .then((produtos: any) => {
        this.produtos = produtos;
      })
  }

      
  RemoveProdutoByKey(key:any, titulo:any) {
    this.bd.removeProduto(key,titulo);
    this.consultaProdutos();
   
  }
}