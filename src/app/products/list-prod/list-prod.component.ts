import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Common/data/product.service';
import { Product } from 'src/app/Common/data/product';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.component.html',
  styleUrls: ['./list-prod.component.scss']
})
export class ListProdComponent implements OnInit {

  listeProduits : Product[];
  categorie : string = "divers"; // Valeur par defaut

  constructor( private productServise : ProductService, private route : ActivatedRoute) { }

  ngOnInit() {
    // via subcribe(), on enregistre ici une callback qui
    // sera ultérieuremnt re-déclenchée chaque fois que la fin
    // d'url change /listProd/CD, listProd/DVD
      this.route.params.subscribe(
        (params : Params) => {this.categorie = params['category']; this.fetchProducts();}
      );
      // { path : 'listProd:/category', compnent : ListProdComponent }      
    }

  fetchProducts(){
    this.productServise.getProductsByCategoryObservable(this.categorie)
      .subscribe(
        (produits) =>{this.listeProduits = produits; }
      );
  }

}
