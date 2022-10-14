class CuentaBanco {
    #nombreTitular;
    #numeroCuenta;
    #saldo;
    #fechaApertura;

    constructor( titular, numeroCuenta ) {
        this.#nombreTitular = titular;
        this.#numeroCuenta = numeroCuenta;
        this.#fechaApertura = new Date();
        this.#saldo = 0;
    }
}

const cuentaJuan = new CuentaBanco( 'Juan', '986654353-0' );

console.log( cuentaJuan );