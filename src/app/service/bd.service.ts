import { Injectable } from '@angular/core'
import * as firebase from 'firebase'
import {AngularFirestore,
AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore"

import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';


@Injectable()
export class Bd {
 
    produto: Observable<any>;
    produtos:Observable<any[]>;
    key:any;


   constructor(public db: AngularFireDatabase){
    this.produtos = this.db.list('produtos').valueChanges();
   }
   


   cadastraProduto(produto: any): void {

        console.log(produto)

        firebase.database().ref('produtos')
            .push(produto)
            .then((resposta: any) => {
                
                this.key = resposta.key

                firebase.storage().ref()
                    .child(`produtos/${produto.titulo}`)
                    .put(produto.imagem);

            
            })
  
        }


   public listProdutos(): Promise<any> {

    return new Promise((resolve, reject) => {

        //consultar as publicações (database)
        firebase.database().ref('produtos')
        .orderByKey()
        .once('value')
        .then((snapshot: any) => {
            //console.log(snapshot.val())

            let produtos: Array<any> = [];

            snapshot.forEach((childSnapshot: any) => {

                let produto = childSnapshot.val()
                produto.key = childSnapshot.key

                
                produtos.push(produto)                   
            })

            console.log(produtos)
            //resolve(publicacoes)

            return produtos.reverse()
        })
        .then((produtos: any) => {
            
            produtos.forEach((produto) => {

                //consultar a url da imagem (storage)
                firebase.storage().ref()
                    .child(`produtos/${produto.titulo}`)
                    .getDownloadURL()
                    .then((url: string) => {
                        
                        produto.url_imagem = url

                    })
            })

            resolve(produtos)

        })

    })

}

getProdutoPrincipalByKey(key:any): Promise<any> {
    let produto ;
    return new Promise((resolve, reject) => {
  
    firebase.database().ref("produtos").child(`${key}`).once('value').then(function(snapshot) {
    produto = snapshot.val();
   

    firebase.storage().ref().child(`produtos/${snapshot.val().titulo}`).getDownloadURL().then(function(url: string){
        produto.url_imagem = url;
        console.log(produto);
        console.log(produto.url_imagem);
        
    });

    resolve(produto);
  });
  return produto;
    })
}

removeProduto(key:any, titulo:any){
    firebase.database().ref("produtos").child(`${key}`).remove().then((deletaImg) =>{
        firebase.storage().ref().child(`produtos/${titulo}`).delete();
       
    })
  
}
}
        