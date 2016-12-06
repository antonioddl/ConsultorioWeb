export class Doctor {
    id: string;
    Nombre: string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    Cedula: string;
    fechanacimiento: string;
    genero: string;
    DireccionCalle: string;
    DireccionNoInterior: number;
    DireccionNoExterior: number;
    DireccionColonia: string;
    DireccionCP: string;
    Telefono: string;
    status: string;
    idEspecialidad: number;
}

export class Especialidad {
    id: string;
    descripcion: string;
}