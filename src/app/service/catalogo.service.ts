import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { observable, Observable } from "rxjs";
import * as firebase from 'firebase'
import { Catalogo } from "../shared/Catalogo.model";


@Injectable()
export class CatalogoService {
    
    constructor(){}
    
    cadastraCatalogo(catalogo:Catalogo):void{
    //Registra clientes da page Contato na base 64;
    firebase.database().ref(`catalogo/${btoa(catalogo.titulo)}`).set(catalogo);

   }

   listCatalogo(): Promise<any> {
    return new Promise((resolve, reject) => {
       let catalogo;
       firebase.database().ref("catalogo").once('value').then(function(snapshot) {
        catalogo = snapshot.val();
        console.log(catalogo);
    resolve(catalogo);
    return catalogo;
});
   });
}
}

