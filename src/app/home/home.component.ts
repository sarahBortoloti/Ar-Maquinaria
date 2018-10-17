import { Component, OnInit} from '@angular/core';
import{ BannerService} from '../service/banner.service';
import { Banner } from '../shared/Banner.model';
import { Observable, from } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('1s ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  public estado: string = 'visivel';

  public banners: Observable<any[]>
  constructor(public banner:BannerService) { 
  
  }

  ngOnInit() {

    
$(document).ready(function(){
  // invoke the carousel
      $('#myCarousel').carousel({
        interval:6000
      });
  
  // scroll slides on mouse scroll 
  $('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){
  
          if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
              $(this).carousel('prev');
              
              
          }
          else{
              $(this).carousel('next');
              
          }
      });
  
  //scroll slides on swipe for touch enabled devices 
  
       $("#myCarousel").on("touchstart", function(event){
   
          var yClick = event.originalEvent.touches[0].pageY;
          $(this).one("touchmove", function(event){
  
          var yMove = event.originalEvent.touches[0].pageY;
          if( Math.floor(yClick - yMove) > 1 ){
              $(".carousel").carousel('next');
          }
          else if( Math.floor(yClick - yMove) < -1 ){
              $(".carousel").carousel('prev');
          }
      });
      $(".carousel").on("touchend", function(){
              $(this).off("touchmove");
      });
  });
      
  });
  //animated  carousel start
  $(document).ready(function(){
  
  //to add  start animation on load for first slide 
  $(function(){
          $.fn.extend({
              animateCss: function (animationName) {
                  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                  this.addClass('animated ' + animationName).one(animationEnd, function() {
                      $(this).removeClass(animationName);
                  });
              }
          });
               $('.item1.active img').animateCss('slideInDown');
               $('.item1.active h2').animateCss('zoomIn');
               $('.item1.active p').animateCss('fadeIn');
               
  });
      
  //to start animation on  mousescroll , click and swipe
  
  
   
       $("#myCarousel").on('slide.bs.carousel', function () {
          $.fn.extend({
              animateCss: function (animationName) {
                  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                  this.addClass('animated ' + animationName).one(animationEnd, function() {
                      $(this).removeClass(animationName);
                  });
              }
          });
      
  // add animation type  from animate.css on the element which you want to animate
  
          $('.item1 img').animateCss('slideInDown');
          $('.item1 h2').animateCss('zoomIn');
          $('.item1 p').animateCss('fadeIn');
          
          $('.item2 img').animateCss('zoomIn');
          $('.item2 h2').animateCss('swing');
          $('.item2 p').animateCss('fadeIn');
          
          $('.item3 img').animateCss('fadeInLeft');
          $('.item3 h2').animateCss('fadeInDown');
          $('.item3 p').animateCss('fadeIn');
      });
  });
    //this.listaBanner();
    //setTimeout(() => this.logicaRotacao(), 3000)
  }

   /*
  public listaBanner(): void {
    this.banner.listBanner()
      .then((banners: any) => {
        this.banners = banners;
      })
  }
  
 
  public logicaRotacao(): void {
    
    //auxilia na exibição da imagem seguinte
    let idx: number

    //ocultar imagem
    for(let i:number = 1; i <= 3; i++) {

      if (this.banners[i].estado === 'visivel') {
        this.banners[i].estado = 'escondido'

        idx = i === 3 ? 1 : i + 1

        break
      }
    }

    //exibir a próxima imagem
    this.banners[idx].estado = 'visivel'

    setTimeout(() => this.logicaRotacao(), 3000)
  }
*/





}

