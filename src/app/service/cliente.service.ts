
import { ClienteContato } from '../shared/ClienteContato.model';
import * as firebase from 'firebase'
import { ClienteRepresentante } from '../shared/ClienteRepresentante.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from '@firebase/util';

export class Cliente{

    clientesRepresentantes: AngularFireList<any[]>;
    constructor(){
     //this.clientesRepresentantes = fb.list('cliente_representante');
    //console.log(this.clientesRepresentantes);
    }
    public cadastrarClienteContato(clienteContato:ClienteContato):void{
        //Registra clientes da page Contato na base 64;
        firebase.database().ref(`cliente_contato/${btoa(clienteContato.email)}`).set(clienteContato);

    }




       
       
    
}