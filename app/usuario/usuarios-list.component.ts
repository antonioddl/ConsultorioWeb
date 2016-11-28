import {Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService} from '../services/usuario.service';

@Component({
    selector: "usuarios-list",
    templateUrl: "app/usuario/template/usuarios-list.component.html"
})

export class UsuariosList {
     public usuarios: Array<Usuario> = [];

    constructor(private _usuarioService: UsuarioService){
        this._usuarioService= _usuarioService;
    }
    ngOnInit(){
        this.getAllUsuarios();
    }
    getAllUsuarios(){
        this._usuarioService.getAllUsuarios()
        .subscribe(
            data => this.usuarios = data,
            error => alert("Error: " + error)
        );
    }
    generarArreglo(obj) {
        return Object.keys(obj).map((key) => { return obj[key] });
    }
}
