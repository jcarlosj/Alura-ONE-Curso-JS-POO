export class Cuenta {
    #nombreTitular;
    #numeroCuenta;
    #saldo;
    #fechaApertura;
    static cantidad = 0;        // Atributo estático de la Clase

    constructor( titular, numeroCuenta ) {
        this.#nombreTitular = titular;
        this.#numeroCuenta = numeroCuenta;
        this.#fechaApertura = new Date();
        this.#saldo = 0;

        Cuenta.cantidad ++;
    }

    static getCuentas() {
        return `Cantidad cuentas creadas: ${ Cuenta.cantidad }`;
    }
}