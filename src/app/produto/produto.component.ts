import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bd } from '../service/bd.service';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Routes } from '@angular/router'
import { ProdutoService } from '../service/produto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers:[Bd]
})
export class ProdutoComponent implements OnInit {

 // private subscription: Subscription;
  private key :any;
  private p:any;
  public produto:any;
  private subscription: Subscription;
  constructor(private router:Router,private route:ActivatedRoute, private bd: Bd) { }

  ngOnInit(){

      this.p = this.route.params.subscribe(
        (param: any) => {
          this.key = param['key'];
          console.log('key: '+ this.key);
   }); 

  this.getProduto(this.key);
 // this.getProdutoSecundaria(this.key);
    }
    
    getProdutoUrl(produto: any): any {
     return this.bd.getProdutoPrincipalByKey(produto);
   
    }
  
    public getProduto(key): void {
      this.bd.getProdutoPrincipalByKey(this.key)
        .then((produto: any) => {
          this.produto = produto;
        })
    }

    
  }



