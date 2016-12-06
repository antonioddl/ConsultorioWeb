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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var login_component_1 = require('./Login/login.component');
var home_component_1 = require('./home/home.component');
var citas_component_1 = require('./citas/citas.component');
var usuario_service_1 = require('./services/usuario.service');
var usuarios_list_component_1 = require('./usuario/usuarios-list.component');
var index_1 = require('./usuario/index');
var menu_component_1 = require('./menu/menu.component');
var index_2 = require('./doctores/index');
var index_3 = require('./doctores/index');
var index_4 = require('./services/index');
var index_5 = require('./services/index');
var index_6 = require('./services/index');
//primeng
var primeng_1 = require('primeng/primeng');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, primeng_1.ScheduleModule, app_routing_1.routing],
            declarations: [
                app_component_1.AppComponent, login_component_1.LoginComponent, home_component_1.HomeComponent,
                citas_component_1.CitasComponent, usuarios_list_component_1.UsuariosList, menu_component_1.MenuComponent,
                index_1.UsuariosRegistro, index_2.DoctoresList, index_3.DoctoresRegistro
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [usuario_service_1.UsuarioService, index_4.DoctorService, index_5.TipoUsuarioService, index_6.especialidadService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map