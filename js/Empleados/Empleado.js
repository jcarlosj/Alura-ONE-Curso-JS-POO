export class Empleado {
    #fullName;
    #numeroCedula;
    #salario;

    static cantidad = 0;        // Atributo estático de la Clase

    constructor( fullName, numeroCedula, salario ) {
        this.#fullName = fullName;
        this.#numeroCedula = numeroCedula;
        this.#salario = salario;

        Empleado.cantidad ++;
    }

    // Metodo estático de la clase
    static getCantidad() {
        return `# total empleados: ${ Empleado.cantidad }`;
    }

    // metodo de clase abstracta
    bonificacion() {
        return this.#salario;
    }

    _bonificacion( bono ) {
        return this.#salario + this.#salario * bono / 100;
    }
}