import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {  

  categories : string[] = ['divers', 'DVD' , 'CD' , 'livres'];

  constructor(private router : Router) { }

  onNavigate(selectedCategory : string = "divers"){
    let link = ['/products','listProd', selectedCategory];
    this.router.navigate(link); // Pour naviguer
  }

  ngOnInit() {
  }

}
