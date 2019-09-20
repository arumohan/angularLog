// import { Injectable } from '@angular/core';
// import { Devise } from '../data/devise';
// import { Observable, of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

// export class DeviseService {

//   constructor(private http : HttpClient ) { }

//     public rechercherDevises() : Observable < Devise[] > {

//       let url = "./devise-api/public/devise";

//       return this.http.get<Devise[]>(url);
//     }

//   // pour version temporaire avant appel http vers api-rest:
//   private tabDevise : Devise[] = [
//     new Devise("USD", "Dollar",1),
//     new Devise("EUR", "Euro",0.9),
//     new Devise("GBP", "Livre",0.8),
//     new Devise("JPY", "Yen",120)
//     // 0.9 euro pour 1 dollar
//   ];

//   public rechercherDevises1() : Observable < Devise[] >/* Avec Asynchrone */{

//     return of(this.tabDevise); // version temporaire avant appel http
//   }

//   public convertir(montant : number, 
//                     codeMonnaieSource : string, 
//                     codeMonnaieCible : string ) : Observable < number > { 
//             let res = 1;
//             //code temporaire (sans http):
//             let deviseCible = null;
//             let deviseSource = null;
//             for(let d of this.tabDevise){
//               if(d.code == codeMonnaieSource)
//               deviseSource = d;
//               if( d.code == codeMonnaieCible)
//               deviseCible = d;
//             }
//               res = montant * deviseCible.change / deviseSource.change;
//               return of(res);
//         }  
// }


import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  public deleteDevise(codeDevise : string) : Observable<any>{
    let url = `./devise-api/private/role_admin/devise/${codeDevise}`;
    return this.http.delete(url);
  }

  constructor(private http: HttpClient) { }

  public rechercherDevises() : Observable< Devise[] > {
    //return of(this.tabDevise); //version temporaire avant appel http
    //vrai appel HTTP:
    let url = "./devise-api/public/devise";
    //l'url complete sera préfixée par "http://localhost:8282" ou autre
    //selon le fichier proxy.conf.json (ng serve --proxy-config proxy.conf.json)
    //durant le développement ou par un équivalent en production
    return this.http.get<Devise[]>(url);
    //déclencher immédiat de la requete http (en mode get)
    //retour d'un objet "Observable" qui permettra de récupérer 
    //le futur résultat (ou le message d'erreur) en différé
  }
  //pour version temporaire avant appel http vers api-rest:
  private tabDevise : Devise[] = [
    new Devise("USD","Dollar",1),
    new Devise("EUR","Euro",0.9),
    new Devise("GBP","Livre",0.8),
    new Devise("JPY","Yen",120)
    // 0.9 euro pour 1 dollar
  ];  

  public convertir(montant:number, 
                   codeMonnaieSource : string ,
                   codeMonnaieCible : string ) : Observable<number>{
          let url = `./devise-api/public/convert` + 
              `?source=${codeMonnaieSource}&target=${codeMonnaieCible}&amount=${montant}`;

          return this.http.get<object>(url)
          .pipe(
            map( (responseObject) => { return responseObject["result"];
          })
          );
      // let res = 1;
      // //code temporaire (sans http):
      // let deviseCible =null ;
      // let deviseSource = null;
      // for(let d of this.tabDevise){
      //   if(d.code==codeMonnaieSource)
      //        deviseSource= d;
      //   if(d.code==codeMonnaieCible)
      //        deviseCible= d;
      // }
      // res = montant * deviseCible.change / deviseSource.change;
      // return of(res);
  }  
}

