import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BasicComponent } from './basic/basic.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';
import { ProductsComponent } from './products/products.component';
import { ListProdComponent } from './products/list-prod/list-prod.component';


/* parametrage de ce qui s'affiche à la place de 
   <router-outlet></...> dans app.component.html */
const routes: Routes = [
  { path: 'login', component: LoginComponent } ,
  { path: 'welcome', component: WelcomeComponent } ,
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'basic', component: BasicComponent },
  { path: 'adminDevise', component: AdminDeviseComponent },
  { path: 'products', component: ProductsComponent,
      children : [
        { path: 'listProd/:category', component:ListProdComponent},
        { path:'', redirectTo: 'listProd/divers',pathMatch:'prefix'}
      ] }

];
/* pour naviguer <a [routerLink]="['/login']"> vers login </a> */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
