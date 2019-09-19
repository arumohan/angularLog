import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() // valeur modifiable par le composant parent
          // Via <app-header [titre] ="attributDuParent"></app-header>
          // ou <app-header [titre] ="valeurFixe"></app-header>
          // ou <app-header [titre] ='valeurFixe'></app-header>
  titre ="My-default-header"; // Valeur par Défaut (pouvant changer)

  constructor() { }

  ngOnInit() {
  }

}
