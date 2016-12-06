import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class TipoUsuarioService {
    http: Http;
    endpoint_url: string = "http://localhost/api/tipousuarios";
    headers: Headers;
    requestoptions: RequestOptions;

    constructor(http: Http){
        this.http = http;
    }

    getAllTypes () {
        return this.http.get(this.endpoint_url).map(res => res.json());
    }
}