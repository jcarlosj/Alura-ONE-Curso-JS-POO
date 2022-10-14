export class Cuenta {
    #cliente;
    #numeroCuenta;
    #saldo;
    #fechaApertura;
    static cantidad = 0;        // Atributo estático de la Clase

    constructor( cliente, numeroCuenta ) {
        this.#cliente = cliente;
        this.#numeroCuenta = numeroCuenta;
        this.#fechaApertura = new Date();
        this.#saldo = 0;

        Cuenta.cantidad ++;
    }

    // Metodo estático de la clase
    static getCantidad() {
        return `Cantidad cuentas: ${ Cuenta.cantidad }`;
    }
}