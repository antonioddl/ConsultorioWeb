import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './home/home.component';
import { CitasComponent } from './citas/citas.component';
import { UsuarioService } from './services/usuario.service';
import { UsuariosList } from './usuario/usuarios-list.component';
import { UsuariosRegistro } from './usuario/index';
import { MenuComponent } from './menu/menu.component';
import { DoctoresList } from './doctores/index';
import { DoctoresRegistro } from './doctores/index';
import { DoctorService} from './services/index';
import { TipoUsuarioService } from './services/index';
import { especialidadService } from './services/index';

//primeng
import {ScheduleModule} from 'primeng/primeng';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, ScheduleModule, routing],
    declarations: [
        AppComponent, LoginComponent, HomeComponent,
        CitasComponent, UsuariosList, MenuComponent, 
        UsuariosRegistro, DoctoresList, DoctoresRegistro
    ],
    bootstrap: [AppComponent],
    providers: [UsuarioService, DoctorService, TipoUsuarioService, especialidadService]
})
export class AppModule { }