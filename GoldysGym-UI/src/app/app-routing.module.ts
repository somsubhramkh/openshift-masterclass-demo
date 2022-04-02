import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardMarketingComponent } from './board-marketing/board-marketing.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { UserqueryComponent } from './userquery/userquery.component';
import { ManageprogramsComponent } from './manageprograms/manageprograms.component';
import { AuthguardService } from './_services/authguard.service';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { ExecutiveticketComponent } from './executiveticket/executiveticket.component';

//Implement the routes for all components and add canActivate to required paths
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: BoardUserComponent,canActivate:[AuthguardService] },
  { path: 'mart', component: BoardMarketingComponent,canActivate:[AuthguardService] },
  { path: 'admin', component: BoardAdminComponent,canActivate:[AuthguardService] },
  { path: 'query',component:UserqueryComponent,canActivate:[AuthguardService]},
  {path:'manageprograms',component:ManageprogramsComponent,canActivate:[AuthguardService]},
  {path:'manageusers',component:ManageuserComponent,canActivate:[AuthguardService]},
  {path:'tickets',component:ExecutiveticketComponent,canActivate:[AuthguardService]},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// AppRoutingModule is responsible for routing to all the components
export class AppRoutingModule { }
