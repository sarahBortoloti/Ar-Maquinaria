import{Router, RouterModule} from '@angular/router';
import { AppComponent } from '../app.component';
import { ListBannersComponent } from './list-banners/list-banners.component';
import { AdminAdminComponent } from './admin-admin.component';
import { ListProdutosComponent } from './list-produtos/list-produtos.component';
import { AdminBannersComponent } from './admin-banners/admin-banners.component';
import { AdminProdutosComponent } from './admin-produtos/admin-produtos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{adminRoutes} from './admin-routing.module';
import { MenuGuard } from '.././admin-menu-guard.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@NgModule({
    imports:[CommonModule, AdminRoutingModule, BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
       
        AngularFireDatabaseModule, // for database
        FormsModule,
        HttpModule,
        RouterModule.forChild(adminRoutes)],
    exports:[],
    declarations:[
        AdminAdminComponent,
        AdminProdutosComponent,
        AdminBannersComponent,
        ListProdutosComponent,
        ListBannersComponent
    ],
    providers: [MenuGuard]
})

export class AdminModule{

}