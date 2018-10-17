import { Component, OnInit } from '@angular/core';
import { Bd } from '../service/bd.service';
import { Produto } from '../shared/Produto.model';
import { Observable } from 'rxjs';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Routes, Router } from '@angular/router'
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers:[Bd,AngularFireDatabase]
})
export class ProdutosComponent implements OnInit {

  public produtos: Observable<any[]>
  selectedProduto: any;
  
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


}
