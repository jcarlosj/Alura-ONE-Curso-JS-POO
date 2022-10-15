import { Empleado } from './Empleado.js';


export class Director extends Empleado {
    constructor( fullName, numeroCedula, salario ) {
        super( fullName, numeroCedula, salario );
    }

    bonificacion() {
        const bono = 10;

        return super._bonificacion( bono );
    }
}