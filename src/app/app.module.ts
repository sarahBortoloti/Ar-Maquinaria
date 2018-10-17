import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminModule } from './admin-admin/admin.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produto/produto.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { LojaComponent } from './loja/loja.component';
import { ContatoComponent } from './contato/contato.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { PublicoComponent } from './publico/publico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import{ROUTES} from './app.routes';
import { AngularFirestore } from 'angularfire2/firestore';
import { Cliente } from './service/cliente.service';
import { BannerService } from './service/banner.service';
import { Admin_Login } from './service/admin-login.service';
import { Bd } from './service/bd.service';
import { CatalogoService } from './service/catalogo.service';
import { MenuGuard } from './admin-menu-guard.service';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AdminLoginGuard } from './admin-login-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HeaderComponent,
    HomeComponent,
    RodapeComponent,
    ProdutosComponent,
    ProdutoComponent,
    EmpresaComponent,
    LojaComponent,
    ContatoComponent,
    CatalogoComponent,
    PublicoComponent
  ],
  imports: [
    BrowserModule, AdminModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    
    ReactiveFormsModule,
    AngularFireDatabaseModule, // for database
    FormsModule,
    HttpModule,

    AngularFireModule.initializeApp(environment.firebase),
  
  ],
  providers: [ HttpClientJsonpModule ,
    AngularFirestore,
    Cliente,
    BannerService,
    Admin_Login, AdminLoginGuard,
    Bd, CatalogoService,
    HttpModule,
    AngularFireAuth,
    MenuGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
