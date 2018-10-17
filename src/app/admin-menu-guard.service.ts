import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "@firebase/util";
import { Injectable } from "@angular/core";

@Injectable()
export class MenuGuard implements CanActivateChild {
   
    canActivateChild(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot):boolean{
            console.log(route);
            console.log(state);
            return true;
    }
 
    }
