import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './home/home.component';

export const router: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);