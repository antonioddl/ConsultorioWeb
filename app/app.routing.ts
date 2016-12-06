import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { LoginComponent } from '../app/Login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { UsuariosList } from '../app/usuario/usuarios-list.component';
import { UsuariosRegistro } from '../app/usuario/index';
import {DoctoresList} from '../app/doctores/index';
import { DoctoresRegistro } from '../app/doctores/index';
import { CitasComponent} from '../app/citas/citas.component';

const IndexRoute: Route = {
    path: "",
    component: HomeComponent
};

const FallBackRoute: Route = {
    path: '**',
    component: HomeComponent
}

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'usuarios', component: UsuariosList,
    },
    { path: 'altausuario', component: UsuariosRegistro },
    { path: 'doctores', component: DoctoresList },
    { path: 'altadoctores', component: DoctoresRegistro },
    { path: 'citas', component: CitasComponent},
    IndexRoute,
    FallBackRoute
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);