"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var DoctorService = (function () {
    function DoctorService(http) {
        this.endpoint_url = "http://localhost/api/doctores";
        this.http = http;
    }
    DoctorService.prototype.getAllDoctores = function () {
        return this.http.get(this.endpoint_url).map(function (res) { return res.json(); });
    };
    DoctorService.prototype.postDoctor = function (id, nombre, app, apm, cedula, fechnac, genero, dcalle, dnext, dnint, dcol, dcp, tel, status, idespec) {
        var body = JSON.stringify({ "id": id, "Nombre": nombre, "ApellidoPaterno": app, "ApellidoMaterno": apm, "Cedula": cedula,
            "fechanacimiento": fechnac, "genero": genero, "DireccionCalle": dcalle, "DireccionNoExterior": dnext,
            "DireccionNoInterior": dnint, "DireccionColonia": dcol, "DireccionCP": dcp, "Telefono": tel,
            "status": status, "idEspecialidad": idespec });
        var headers = new http_1.Headers({ 'Content-Type': 'aplication/json' });
        headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:12345/');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
        var options = new http_1.RequestOptions({ headers: headers });
        options.headers;
        return this.http.post(this.endpoint_url, body, options)
            .map(function (response) {
            if (response.json().id != null) {
                return true;
            }
            else {
                return false;
            }
        })
            .catch(this.handleError);
    };
    DoctorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DoctorService);
    return DoctorService;
}());
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map