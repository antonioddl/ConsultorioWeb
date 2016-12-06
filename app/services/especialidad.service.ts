import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class especialidadService {
    http: Http;
    endpoint_url: string = "http://localhost/api/especialidad";
    headers: Headers;
    requestoptions: RequestOptions;

    constructor(http: Http){
        this.http = http;
    }

    getAllEspecialidades () {
        return this.http.get(this.endpoint_url).map(res => res.json());
    }
}