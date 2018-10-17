import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../service/banner.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Banner } from '../../shared/Banner.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin-banners',
  templateUrl: './admin-banners.component.html',
  styleUrls: ['./admin-banners.component.css']
})
export class AdminBannersComponent implements OnInit {
  private imagem:any;
  public banners: Observable<any[]>
  constructor(public b:BannerService) { }

  ngOnInit() {
  }

  public formulario:FormGroup = new FormGroup({
    'titulo': new FormControl(null),
    
  })


  public cadastraBanners():void{
    // console.log(this.formulario);
     let banner: Banner = new Banner(this.formulario.value.titulo, "visivel", this.imagem[0]);

     this.b.cadastrarBanners(banner);
     alert("Banner cadastrado com sucesso!")
      this.onSubmit();
    }



  onSubmit() {
    if (this.formulario.valid) {
      console.log("Form Submitted!");
      this.formulario.reset();
    }
  }

  preparaImagemUpload(event: Event):void {
    this.imagem= (<HTMLInputElement>event.target).files; 
   
  }


}