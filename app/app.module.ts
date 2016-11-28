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
import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routing ],
    declarations: [
        AppComponent, LoginComponent, HomeComponent,
        CitasComponent, UsuariosList, MenuComponent
    ],
    bootstrap: [AppComponent],
    providers: [UsuarioService]
})
export class AppModule { }