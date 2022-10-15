import { Empleado } from './Empleado.js';


export class Gerente extends Empleado {
    constructor( fullName, numeroCedula ) {
        super( fullName, numeroCedula );
    }
}