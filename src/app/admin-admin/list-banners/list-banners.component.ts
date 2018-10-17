import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BannerService } from '../../service/banner.service';

@Component({
  selector: 'app-list-banners',
  templateUrl: './list-banners.component.html',
  styleUrls: ['./list-banners.component.css']
})
export class ListBannersComponent implements OnInit {

  public banners: Observable<any[]>
  constructor(public banner:BannerService) { 
  
  }

  ngOnInit() {
    this.listaBanners();
  }

    
  public listaBanners(): void {
    this.banner.listBanners()
      .then((banners: any) => {
        this.banners = banners;
      })
  }

  public removeBanner(key:any, titulo:any):void{
    this.banner.RemoveBannerByKey(key, titulo);
    this.listaBanners();
  }
}
