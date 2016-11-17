"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./Login/login.component');
var home_component_1 = require('./home/home.component');
exports.router = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.routing.js.map