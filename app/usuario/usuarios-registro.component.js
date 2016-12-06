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
var UsuariosRegistro = (function () {
    function UsuariosRegistro(_tipousuarioService, _usuarioService) {
        this._tipousuarioService = _tipousuarioService;
        this._usuarioService = _usuarioService;
        this.types = [];
        this.modelo = {};
        this.loading = false;
        this._tipousuarioService = _tipousuarioService;
        this._usuarioService = _usuarioService;
    }
    UsuariosRegistro.prototype.ngOnInit = function () {
        this.getAllTypes();
    };
    UsuariosRegistro.prototype.getAllTypes = function () {
        var _this = this;
        this._tipousuarioService.getAllTypes()
            .subscribe(function (data) { return _this.types = data; }, function (error) { return alert("Error: " + error); });
    };
    UsuariosRegistro.prototype.generarArreglo = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    UsuariosRegistro.prototype.insertarUsuario = function () {
        var _this = this;
        this.loading = true;
        this._usuarioService.postUsuario(this.modelo.username, this.modelo.nombre, this.modelo.password, this.modelo.idtipousuario)
            .subscribe(function (result) {
            if (result === true) {
                _this.messageOK = "Insertado de manera correcta";
                _this.loading = false;
            }
            else {
                _this.message = "No se inserto el usuario, contacte al administrador";
                _this.loading = false;
            }
        });
    };
    UsuariosRegistro = __decorate([
        core_1.Component({
            selector: "usuario-registro",
            templateUrl: 'app/usuario/template/usuarios-registro.component.html',
            styleUrls: ['app/usuario/template/usuarios-registro.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.TipoUsuarioService, index_2.UsuarioService])
    ], UsuariosRegistro);
    return UsuariosRegistro;
}());
exports.UsuariosRegistro = UsuariosRegistro;
//# sourceMappingURL=usuarios-registro.component.js.map