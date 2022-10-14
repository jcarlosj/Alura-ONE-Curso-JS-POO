export class Cuenta {
    #cliente;
    #numeroCuenta;
    #saldoTotal;
    #fechaApertura;
    static cantidad = 0;        // Atributo estático de la Clase

    constructor( cliente, numeroCuenta ) {
        this.#cliente = cliente;
        this.#numeroCuenta = numeroCuenta;
        this.#fechaApertura = new Date();
        this.#saldoTotal = 0;

        Cuenta.cantidad ++;
    }

    get saldo() {
        return this.#saldoTotal;
    }

    // Metodo estático de la clase
    static getCantidad() {
        return `Cantidad cuentas: ${ Cuenta.cantidad }`;
    }

    depositar( value ) {
        if( value > 0 )
            this.#saldoTotal += value;
        
        return this.#saldoTotal;
    }

    retirar( value ) {
        if( value <= this.#saldoTotal )
            this.#saldoTotal -= value;

        return this.#saldoTotal;
    }

    transferir( CuentaDestino, value ) {
        this.retirar( value );
        CuentaDestino.depositar( value );
    }

}