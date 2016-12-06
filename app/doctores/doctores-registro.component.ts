import { Component, OnInit } from '@angular/core';
import { Especialidad } from './doctor';
import { especialidadService } from '../services/index';
import { DoctorService } from '../services/index';

@Component({
    selector: 'doctores-registro',
    templateUrl: 'app/doctores/template/doctores-registro.component.html'
})

export class DoctoresRegistro implements OnInit {
    public especialidades: Array<Especialidad> = [];
    modelo: any = { } ;
    public message;
    public messageOK;
    constructor(private _especialidadService: especialidadService, private _doctorService: DoctorService) {
        this._especialidadService = _especialidadService;
        this._doctorService = _doctorService;
    }

    ngOnInit() {
        this.getAllEspecialidades();
    }
    getAllEspecialidades() {
        this._especialidadService.getAllEspecialidades()
            .subscribe(
            data => this.especialidades = data,
            error => alert("Error: " + error)
            );
    }

    generarArreglo(obj) {
        return Object.keys(obj).map((key) => { return obj[key] });
    }

    insertarDoctor(){

        this._doctorService.postDoctor("", this.modelo.nombre, this.modelo.app, this.modelo.apm, this.modelo.cedula, "1995-12-12", this.modelo.genero, this.modelo.dcalle, this.modelo.dnext, this.modelo.dint, this.modelo.dcol, this.modelo.dcp, this.modelo.tel, "A" , this.modelo.idespec)
            .subscribe(result => {
                if (result === true) {
                    this.messageOK= "Insertado de manera correcta";
                    
                } else {
                    this.message = "No se inserto el doctor, contacte al administrador";
               
                }
            });
    }

}