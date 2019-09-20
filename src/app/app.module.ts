import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BasicComponent } from './basic/basic.component';
import { FooterComponent } from './footer/footer.component';
import { CalculComponent } from './basic/calcul/calcul.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { WelcomeComponent } from './welcome/welcome.component';
import { TvaComponent } from './tva/tva.component'; 
import { BsUtilModule } from 'src/bs-util/bs-util.module';
import { ConversionComponent } from './conversion/conversion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';
import { MyAuthInterceptor } from './Common/monIntercepteur';
import { ProductsComponent } from './products/products.component';
import { ListProdComponent } from './products/list-prod/list-prod.component';
//import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicComponent,
    FooterComponent,
    CalculComponent,
    LoginComponent,
    WelcomeComponent,
    TvaComponent,
    ConversionComponent,
    AdminDeviseComponent,
    ProductsComponent,
    ListProdComponent,   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    BsUtilModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,    
    useClass: MyAuthInterceptor,    
    multi: true  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
