import { Component, OnInit} from '@angular/core';
import{ BannerService} from '../service/banner.service';
import { Banner } from '../shared/Banner.model';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
  
})
export class HomeComponent implements OnInit {

  
  showNavigationArrows = false;
  showNavigationIndicators = false;
  public banners: Observable<any[]>
 

  constructor( public banner:BannerService,config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
      this.listaBanner() ;
      config.interval = 3500;
      config.wrap = false;
      config.keyboard = false;
      config.pauseOnHover = false;
  }



  ngOnInit() {
   // this.listaBanner();
  }

  public listaBanner():void{
    this.banner.listBanner()
    .then((banners:any)=>{
      this.banners = banners;
    })
  }
}