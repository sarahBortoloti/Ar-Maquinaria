import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../service/catalogo.service';
import { Catalogo } from '../shared/Catalogo.model';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(private c: CatalogoService) { }

  private catalogo: Catalogo;
  ngOnInit() {
    this.consultaCatalogo();
   
  }

  public consultaCatalogo(): void {
    console.log( this.c.listCatalogo());
    this.c.listCatalogo()
      .then((catalogo: any) => {
        this.catalogo = catalogo;
        console.log(catalogo);
      })
  }

}
