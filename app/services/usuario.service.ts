import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class UsuarioService {
    http: Http;
    endpoint_url: string = "http://localhost/api/usuarios";
    headers: Headers;
    requestoptions: RequestOptions;

    constructor(http: Http){
        this.http = http;
    }

    getAllUsuarios () {
        return this.http.get(this.endpoint_url).map(res => res.json());
    }
}