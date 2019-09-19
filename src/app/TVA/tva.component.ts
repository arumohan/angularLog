import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.scss']
})
export class TvaComponent implements OnInit {
  ht : number;
  taux : number = 10;
  tva : number;
  ttc : number;
  calculer(){
    this.tva = this.ht * this.taux / 100;
    this.ttc = Number(this.ht) + this.tva;
  }
  constructor() { }
  ngOnInit() {
  }
}
