import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../Common/service/devise.service';
import { Devise } from '../Common/data/devise';

@Component({
  selector: 'app-admin-devise',
  templateUrl: './admin-devise.component.html',
  styleUrls: ['./admin-devise.component.scss']
})
export class AdminDeviseComponent implements OnInit {

  devises : Devise[];
  selectedDevise : Devise = null;
  message : string =" ";

  onSupprimer(){
    if(this.deviseService==null) return;
    this.deviseService.deleteDevise(this.selectedDevise.code)
      .subscribe(
        () =>{ this.message = "Suppression Fait"; 
        this.ngOnInit(); // Réactualiser contenu liste (Avec une ligne de moins)
        this.selectedDevise=null;},
        (err) => {this.message = err.message;}
      );
  }

  constructor(private deviseService : DeviseService) { }

  ngOnInit() {
    this.deviseService.rechercherDevises()
        .subscribe(
          (listeDevises) => {this.devises = listeDevises;},
          (err) => {this.message = err.message;}
        )
  }

}
