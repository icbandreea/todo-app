import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent, title: "Home - Listelle"},
  {path: 'login', component: LoginComponent, title: "Login - Listelle"},
  {path: 'register', component: RegisterComponent, title: "Register - Listelle"},
  {path: 'dashboard', component: DashboardComponent, title: "Dashboard - Listelle"},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
