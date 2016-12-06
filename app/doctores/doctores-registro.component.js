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
var index_1 = require('../services/index');
var index_2 = require('../services/index');
var DoctoresRegistro = (function () {
    function DoctoresRegistro(_especialidadService, _doctorService) {
        this._especialidadService = _especialidadService;
        this._doctorService = _doctorService;
        this.especialidades = [];
        this.modelo = {};
        this._especialidadService = _especialidadService;
        this._doctorService = _doctorService;
    }
    DoctoresRegistro.prototype.ngOnInit = function () {
        this.getAllEspecialidades();
    };
    DoctoresRegistro.prototype.getAllEspecialidades = function () {
        var _this = this;
        this._especialidadService.getAllEspecialidades()
            .subscribe(function (data) { return _this.especialidades = data; }, function (error) { return alert("Error: " + error); });
    };
    DoctoresRegistro.prototype.generarArreglo = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    DoctoresRegistro.prototype.insertarDoctor = function () {
        var _this = this;
        this._doctorService.postDoctor("", this.modelo.nombre, this.modelo.app, this.modelo.apm, this.modelo.cedula, "1995-12-12", this.modelo.genero, this.modelo.dcalle, this.modelo.dnext, this.modelo.dint, this.modelo.dcol, this.modelo.dcp, this.modelo.tel, "A", this.modelo.idespec)
            .subscribe(function (result) {
            if (result === true) {
                _this.messageOK = "Insertado de manera correcta";
            }
            else {
                _this.message = "No se inserto el doctor, contacte al administrador";
            }
        });
    };
    DoctoresRegistro = __decorate([
        core_1.Component({
            selector: 'doctores-registro',
            templateUrl: 'app/doctores/template/doctores-registro.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.especialidadService, index_2.DoctorService])
    ], DoctoresRegistro);
    return DoctoresRegistro;
}());
exports.DoctoresRegistro = DoctoresRegistro;
//# sourceMappingURL=doctores-registro.component.js.map