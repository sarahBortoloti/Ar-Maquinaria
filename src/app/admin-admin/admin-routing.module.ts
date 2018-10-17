import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLoginComponent } from "../admin-login/admin-login.component";

import { ListProdutosComponent } from "./list-produtos/list-produtos.component";
import { AdminProdutosComponent } from "./admin-produtos/admin-produtos.component";
import { AdminBannersComponent } from "./admin-banners/admin-banners.component";
import { ListBannersComponent } from "./list-banners/list-banners.component";
import { AdminAdminComponent } from "./admin-admin.component";
import { MenuGuard } from "./../admin-menu-guard.service";
import { AdminLoginGuard } from "../admin-login-guard.service";


export const adminRoutes =[
    {path: 'menu', component: AdminAdminComponent,canActivateChildren:[MenuGuard],canActivate:[AdminLoginGuard] ,children:[
        {path:'lista-produtos', component:ListProdutosComponent, canActivate:[AdminLoginGuard]},
        {path:'cadastra-produtos', component:AdminProdutosComponent, canActivate:[AdminLoginGuard]},
        {path:'cadastra-banners', component:AdminBannersComponent, canActivate:[AdminLoginGuard]},
        {path:'lista-banners', component:ListBannersComponent, canActivate:[AdminLoginGuard]},
      

    ]}
   

];

@NgModule({
    imports:[RouterModule.forChild(adminRoutes)],
    exports:[RouterModule]
})
export class AdminRoutingModule{}
