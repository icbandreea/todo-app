import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

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
