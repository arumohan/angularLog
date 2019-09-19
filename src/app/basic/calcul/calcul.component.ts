import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.scss']
})
export class CalculComponent implements OnInit {

  public x : number = 2;
  public n : number = 3;
  public res : number ;
  public detail : boolean = false;
  public tabRes : string[] = [];

  public calculer():void{
    this.res = Math.pow(this.x,this.n); //x à la puissance n
    this.tabRes.push(`${this.x} puissance  ${this.n} = ${this.res}`)
  }

  constructor() { }

  ngOnInit() {
  }

}
