export class Empleado {
    #fullName;
    #numeroCedula;
    #salario;
    #clave;

    static cantidad = 0;        // Atributo estático de la Clase

    constructor( fullName, numeroCedula, salario ) {
        this.#fullName = fullName;
        this.#numeroCedula = numeroCedula;
        this.#salario = salario;
        this.#clave = '';

        Empleado.cantidad ++;
    }

    get clave() {
        return this.#clave;
    }
    set clave( newClave ) {
        this.#clave = newClave;
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