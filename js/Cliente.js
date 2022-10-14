export class Cliente {
    #fullName;
    #numeroCedula;
    #correo;
    static cantidad = 0;        // Atributo estático de la Clase

    constructor( fullName, numeroCedula, correo ) {
        this.#fullName = fullName;
        this.#numeroCedula = numeroCedula;
        this.#correo = correo;

        Cliente.cantidad ++;
    }

    // Metodo estático de la clase
    static getCantidad() {
        return `Cantidad clientes: ${ Cliente.cantidad }`;
    }
}