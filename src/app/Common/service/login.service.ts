import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  private _headers = new HttpHeaders({'Content-Type' : 'application/json'});

  public verifierAuth(username : string, password : string, roles: string):
    Observable<object>{
          let requestObject = 
          { username : username,
            password : password, 
            roles : roles}; // objet javascript qui sera transformé
                            // en JSON et envoyé au coté server (backend)

      let url = "./login-api/public/auth";
      // Prefixe http://localhost:8282 selon proxy.conf.json
      return this.http.post<object>(url, requestObject,{headers : this._headers});
    }
}
