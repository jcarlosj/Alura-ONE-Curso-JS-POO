import { Empleado } from './Empleado.js';


export class Gerente extends Empleado {
    constructor( fullName, numeroCedula, salario ) {
        super( fullName, numeroCedula, salario );
    }

    bonificacion() {
        const bono = 5;

        return super._bonificacion( bono );
    }
}