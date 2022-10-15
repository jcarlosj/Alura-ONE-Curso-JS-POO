import { Empleado } from './Empleado.js';


export class Director extends Empleado {
    constructor( fullName, numeroCedula ) {
        super( fullName, numeroCedula );
    }
}