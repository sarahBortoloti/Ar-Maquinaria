import { Injectable, EventEmitter, Output } from '@angular/core'
import * as firebase from 'firebase'
import{Router} from '@angular/router';
import { Observable } from 'rxjs';



@Injectable()
export class Admin_Login {
    token_id : string;
    user: Observable<firebase.User>;
    constructor( private router:Router) {
     
        console.log(this.user);
    }

@Output() public exibirMenuAdmin: EventEmitter<boolean> = new EventEmitter<boolean>()  
 
public autenticar(email: string, senha: string) {
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((resposta: any) => {
        firebase.auth().currentUser.getIdToken()
            .then((idToken: string) => {
                this.token_id = idToken
                console.log(this.token_id);
                localStorage.setItem('idToken', idToken)
                this.router.navigate(['/menu'])
            })
    })
    .catch((error: Error) => console.log(error))

}

public autenticado(): boolean {

    if (this.token_id === undefined && localStorage.getItem('idToken') != null) {
        this.token_id = localStorage.getItem('idToken')
    }

    if( this.token_id === undefined ) {
        this.router.navigate(['/'])
    }

    return this.token_id !== undefined
}


public sair(): void {

    firebase.auth().signOut()
        .then(() => {
            localStorage.removeItem('idToken')
            this.token_id = undefined
            this.router.navigate(['/'])
        })
    }
}