import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BasicComponent } from './basic/basic.component';
import { WelcomeComponent } from './welcome/welcome.component';


/* parametrage de ce qui s'affiche à la place de 
   <router-outlet></...> dans app.component.html */
const routes: Routes = [
  { path: 'login', component: LoginComponent } ,
  { path: 'welcome', component: WelcomeComponent } ,
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'basic', component: BasicComponent }
];
/* pour naviguer <a [routerLink]="['/login']"> vers login </a> */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
