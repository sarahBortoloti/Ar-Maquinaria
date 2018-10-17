import {Banner} from '../shared/Banner.model'
import { Injectable } from '@angular/core'
import * as firebase from 'firebase'
import { Observable } from 'rxjs';
import { FirebaseDatabase } from '@firebase/database-types';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class BannerService{
    
    banner: Observable<any>;
    banners:Observable<any[]>;
    
    constructor(private angularFire: AngularFireDatabase){}


    public cadastrarBanners(banner:any):void{
        //Registra clientes da page Contato na base 64;
        firebase.database().ref('banners').push(banner).then((resposta: any) => {
            let nomeImagem = resposta.key
        firebase.storage().ref().child(`banners/${(banner.titulo)}`).put(banner.imagem)
    })


    }

    public listBanners(): Promise<any> {

        return new Promise((resolve, reject) => {
    
            //consultar as publicações (database)
            firebase.database().ref('banners')
            .orderByKey()
            .once('value')
            .then((snapshot: any) => {
                //console.log(snapshot.val())
    
                let banners: Array<any> = [];
    
                snapshot.forEach((childSnapshot: any) => {
    
                    let aux = childSnapshot.val()
                    aux.key = childSnapshot.key
    
                    
                    banners.push(aux)                   
                })
    
                console.log(banners)
                //resolve(publicacoes)
    
                return banners.reverse()
            })
            .then((banners: any) => {
                
                banners.forEach((aux) => {
    
                    //consultar a url da imagem (storage)
                    firebase.storage().ref()
                        .child(`banners/${aux.titulo}`)
                        .getDownloadURL()
                        .then((url: string) => {
                            
                            aux.url_imagem = url
    
                        })
                })
    
                resolve(banners)
    
            })
    
        })

    }


    public listBanner(): Promise<any> {

        return new Promise((resolve, reject) => {
    
            //consultar as publicações (database)
            firebase.database().ref('banners').limitToLast(3)
            .orderByKey()
            .once('value')
            .then((snapshot: any) => {
                //console.log(snapshot.val())
    
                let banners: Array<any> = [];
    
                snapshot.forEach((childSnapshot: any) => {
    
                    let aux = childSnapshot.val()
                    aux.key = childSnapshot.key
    
                    
                    banners.push(aux)                   
                })
    
                console.log(banners)
                //resolve(publicacoes)
    
                return banners.reverse()
            })
            .then((banners: any) => {
                
                banners.forEach((aux) => {
    
                    //consultar a url da imagem (storage)
                    firebase.storage().ref()
                        .child(`banners/${aux.titulo}`)
                        .getDownloadURL()
                        .then((url: string) => {
                            
                            aux.url_imagem = url
    
                        })
                })
    
                resolve(banners)
    
            })
    
        })

    }

RemoveBannerByKey(key:any, titulo:any) {
   firebase.database().ref("banners").child(`${key}`).remove().then((deletaImg) =>{
   firebase.storage().ref().child(`banners/${titulo}`).delete();
      });
    }

}