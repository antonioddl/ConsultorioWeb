import { Component, OnInit } from '@angular/core';
import { TipoUsuarioService } from '../services/index';
import { UserType } from './usuario';
import { UsuarioService } from '../services/index';

@Component({
    selector: "usuario-registro",
    templateUrl: 'app/usuario/template/usuarios-registro.component.html',
    styleUrls: ['app/usuario/template/usuarios-registro.component.css']
})

export class UsuariosRegistro implements OnInit {
    public types: Array<UserType> = [];
    modelo: any = {};  
    loading = false;
    public message;
    public messageOK;
    constructor(private _tipousuarioService: TipoUsuarioService, private _usuarioService: UsuarioService) {
        this._tipousuarioService = _tipousuarioService;
        this._usuarioService = _usuarioService;
    }

    ngOnInit() {
        this.getAllTypes();
    } 
    getAllTypes() {
        this._tipousuarioService.getAllTypes()
            .subscribe(
            data => this.types = data,
            error => alert("Error: " + error)
            );
    }

    generarArreglo(obj) {
        return Object.keys(obj).map((key) => { return obj[key] });
    }

    insertarUsuario(){
        this.loading = true;
        this._usuarioService.postUsuario(this.modelo.username, this.modelo.nombre, this.modelo.password, this.modelo.idtipousuario)
            .subscribe(result => {
                if (result === true) {
                    this.messageOK= "Insertado de manera correcta";
                    this.loading=false;
                } else {
                    this.message = "No se inserto el usuario, contacte al administrador";
                    this.loading = false;
                }
            });
    }

}