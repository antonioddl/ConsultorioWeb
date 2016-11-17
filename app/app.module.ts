import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [BrowserModule, routes],
    declarations: [AppComponent, LoginComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }