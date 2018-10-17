import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Admin_Login } from './service/admin-login.service'
import { Observable } from '@firebase/util';

@Injectable()
export class  AdminLoginGuard implements CanActivate {

    constructor(private autenticacao: Admin_Login, private router:Router) {}

    canActivate(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot): boolean{
            if(this.autenticacao.autenticado()){
            return true;
    }
    this.router.navigate(['/']);
    return false;
    }
}
