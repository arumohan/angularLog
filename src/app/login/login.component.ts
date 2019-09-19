import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';
import { LoginService } from '../Common/service/login.service';
import { LoginResponse } from '../Common/data/loginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  p : Personne = new Personne(); //à saisir
  message : string = null; // à afficher via {{message}} coté html

  onLogin(){
    console.log(JSON.stringify(this.p));
    this.loginService.verifierAuth(
      this.p.username, this.p.password, "admin")
    .subscribe(
      (responseObject:LoginResponse) => {this.message = responseObject.message;
      //(responseObject:LoginResponse) => {this.message = responseObject['message'];
      /*this.message = JSON.stringify(responseObject); */},
      (err) => {console.log(err); this.message = err.message}
    );
  }

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

}
