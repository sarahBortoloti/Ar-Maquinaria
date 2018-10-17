import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Produto } from '../shared/Produto.model';

@Injectable()
export class ProdutoService{
    produtoDetails: FirebaseObjectObservable<any>; //from Firebase
    produtos: FirebaseListObservable<any[]>; ; //from Firebase
    constructor(private db: AngularFireDatabase) {}

    
  getProdutoDetails(id){
    this.produtoDetails = this.db.object('/produtos/'+id) as FirebaseObjectObservable<Produto>;
    return this.produtoDetails;     
  }

  deleteProduto(id){
    return this.produtos.remove(id);
  }
}