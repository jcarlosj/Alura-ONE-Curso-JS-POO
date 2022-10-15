export class Empleado {
    #fullName;
    #numeroCedula;

    static cantidad = 0;        // Atributo estático de la Clase

    constructor( fullName, numeroCedula ) {
        this.#fullName = fullName;
        this.#numeroCedula = numeroCedula;

        Empleado.cantidad ++;
    }

    // Metodo estático de la clase
    static getCantidad() {
        return `# total empleados: ${ Empleado.cantidad }`;
    }
}