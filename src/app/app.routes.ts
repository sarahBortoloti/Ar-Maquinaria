import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { EmpresaComponent } from './empresa/empresa.component'
import { ProdutosComponent} from './produtos/produtos.component'
import { CatalogoComponent } from './catalogo/catalogo.component'
import { LojaComponent } from './loja/loja.component'
import { ProdutoComponent } from './produto/produto.component'
import {ContatoComponent} from './contato/contato.component'
import{RepresentantesComponent} from './representantes/representantes.component'
import { AdminLoginComponent } from './admin-login/admin-login.component';
import{AdminLoginGuard} from './admin-login-guard.service'

export const ROUTES: Routes = [
    {path:'home', component:HomeComponent},
    {path:'', component:HomeComponent},
    {path:'empresa', component:EmpresaComponent},
    {path:'produtos',component:ProdutosComponent },
    {path:'catalogo',component:CatalogoComponent},
    {path:'loja',component:LojaComponent},
    {path:'produto/:key',component: ProdutoComponent},
    {path:'representantes', component:RepresentantesComponent},
    {path:'contato', component:ContatoComponent},
    {path:'admin',component:AdminLoginComponent}
]
