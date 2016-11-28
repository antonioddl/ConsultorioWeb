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
var usuario_service_1 = require('../services/usuario.service');
var UsuariosList = (function () {
    function UsuariosList(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.usuarios = [];
        this._usuarioService = _usuarioService;
    }
    UsuariosList.prototype.ngOnInit = function () {
        this.getAllUsuarios();
    };
    UsuariosList.prototype.getAllUsuarios = function () {
        var _this = this;
        this._usuarioService.getAllUsuarios()
            .subscribe(function (data) { return _this.usuarios = data; }, function (error) { return alert("Error: " + error); });
    };
    UsuariosList.prototype.generarArreglo = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    UsuariosList = __decorate([
        core_1.Component({
            selector: "usuarios-list",
            templateUrl: "app/usuario/template/usuarios-list.component.html"
        }), 
        __metadata('design:paramtypes', [usuario_service_1.UsuarioService])
    ], UsuariosList);
    return UsuariosList;
}());
exports.UsuariosList = UsuariosList;
//# sourceMappingURL=usuarios-list.component.js.map