import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../Common/service/devise.service';
import { Devise } from '../Common/data/devise';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  montant : number;
  codeMonnaieSource : string = "EUR";
  codeMonnaieCible : string = "USD";
  resultat : number;

  errorMsg : string = null ;

  listeDevises : Devise[]; //ou bien Array<Devise> ; 

  calculerConversion(){
      this.errorMsg = null;
      this.deviseService.convertir (this.montant, 
        this.codeMonnaieSource, this.codeMonnaieCible)
          .subscribe((montantconvertir :number) =>
              {this.resultat = montantconvertir; },
              (err) => {console.log (err);
              this.errorMsg = "Une erreur technique a eu lieu, Veuillez réessayer pule tard";}
            );
  } 

  constructor( private deviseService : DeviseService) {
    // this.deviseService est un attribut de la classe courante ( typescript)
    // comme ConversionComponent est préfixé par @Component, la paramètre deviseService
    // est automatiquement initialisé par angular ( injection de dépendance).
    deviseService.rechercherDevises()
          .subscribe((devises : Devise []) =>
            { this.listeDevises = devises; },
            (err) => {console.log (err);
          }
        );    
   }
  ngOnInit() {
  }

}
