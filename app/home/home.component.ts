import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'my-home',
    templateUrl: 'app/home/template/home.component.html',
    styleUrls: ['app/home/template/home.component.css']
})
export class HomeComponent {
    nombreConsultorio = "Consultorio Jeje";
    username = "Antonio";
}