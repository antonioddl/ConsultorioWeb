import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class DoctorService {
    http: Http;
    endpoint_url: string = "http://localhost/api/doctores";
    headers: Headers;
    requestoptions: RequestOptions;
    handleError: any;

    constructor(http: Http){
        this.http = http;
    }

    getAllDoctores () {
        return this.http.get(this.endpoint_url).map(res => res.json());
    }

     postDoctor(id, nombre, app, apm, cedula, fechnac, genero, dcalle, dnext, dnint, dcol, dcp, tel, status, idespec){
        let body = JSON.stringify({"id": id, "Nombre": nombre, "ApellidoPaterno": app, "ApellidoMaterno":apm, "Cedula": cedula, 
                                    "fechanacimiento": fechnac, "genero":genero, "DireccionCalle": dcalle, "DireccionNoExterior":dnext,
                                    "DireccionNoInterior": dnint, "DireccionColonia": dcol, "DireccionCP": dcp, "Telefono": tel,
                                    "status": status, "idEspecialidad": idespec});
        let headers = new Headers({'Content-Type': 'aplication/json'});
        headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:12345/');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
        let options = new RequestOptions({headers: headers });
        options.headers;
        return this.http.post(this.endpoint_url, body, options)
            .map((response: Response) => {
                if (response.json().id !=null){
                    return true;
                } else {
                    return false; 
                }
            })
            .catch(this.handleError);
    }
}