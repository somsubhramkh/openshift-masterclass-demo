import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardMarketingComponent } from './board-marketing/board-marketing.component';
import { FooterComponent } from './footer/footer.component';
import { UserqueryComponent } from './userquery/userquery.component';
import { ManageprogramsComponent } from './manageprograms/manageprograms.component';
import {authInterceptorProviders} from './_interceptor/auth.interceptor';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { ExecutiveticketComponent } from './executiveticket/executiveticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardMarketingComponent,
    FooterComponent,
    UserqueryComponent,
    ManageprogramsComponent,
    ManageuserComponent,
    ExecutiveticketComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],

})
export class AppModule { }
