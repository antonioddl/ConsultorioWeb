"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('../app/Login/login.component');
var home_component_1 = require('../app/home/home.component');
var usuarios_list_component_1 = require('../app/usuario/usuarios-list.component');
var index_1 = require('../app/usuario/index');
var index_2 = require('../app/doctores/index');
var index_3 = require('../app/doctores/index');
var citas_component_1 = require('../app/citas/citas.component');
var IndexRoute = {
    path: "",
    component: home_component_1.HomeComponent
};
var FallBackRoute = {
    path: '**',
    component: home_component_1.HomeComponent
};
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    {
        path: 'usuarios', component: usuarios_list_component_1.UsuariosList,
    },
    { path: 'altausuario', component: index_1.UsuariosRegistro },
    { path: 'doctores', component: index_2.DoctoresList },
    { path: 'altadoctores', component: index_3.DoctoresRegistro },
    { path: 'citas', component: citas_component_1.CitasComponent },
    IndexRoute,
    FallBackRoute
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map