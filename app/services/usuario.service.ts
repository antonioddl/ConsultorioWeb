import { Injectable, ErrorHandler } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class UsuarioService {
    http: Http;
    endpoint_url: string = "http://localhost/api/usuarios";
    headers: Headers;
    requestoptions: RequestOptions;
    handleError: any;

    constructor(http: Http){
        this.http = http;
    }

    getAllUsuarios () {
        return this.http.get(this.endpoint_url).map(res => res.json());
    }

    postUsuario(username, nombre, password, idtipousuario){
        let body = JSON.stringify({"username": username, "nombre": nombre, "password": password, "idtipousuario": idtipousuario});
        let headers = new Headers({'Content-Type': 'aplication/json'});
        headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:12345/');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
        let options = new RequestOptions({headers: headers });
        options.headers;
        return this.http.post(this.endpoint_url, body, options)
            .map((response: Response) => {
                if (response.json().username !=null){
                    return true;
                } else {
                    return false; 
                }
            })
            .catch(this.handleError);
    }

}