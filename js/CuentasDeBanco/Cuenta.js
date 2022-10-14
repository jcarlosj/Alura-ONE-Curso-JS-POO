export class Cuenta {
    #cliente;
    #numeroCuenta;
    #saldoTotal;
    #fechaApertura;

    static cantidad = 0;        // Atributo estático de la Clase

    constructor( cliente, numeroCuenta ) {
        // Valida que no se haga una instancia de esta clase, lo que la conviernte en una clase Abstracta
        if( this.constructor == Cuenta ) {
            throw new Error( 'Cuenta es una clase abstracta por lo que no debe instanciarla' );
        }

        this.#cliente = cliente;
        this.#numeroCuenta = numeroCuenta;
        this.#fechaApertura = new Date();
        this.#saldoTotal = 0;

        Cuenta.cantidad ++;
    }

    get saldo() {
        return this.#saldoTotal;
    }
    set saldo( value ) {
        if( value instanceof Cliente )
            this.#saldoTotal = value;
    }

    // Metodo estático de la clase
    static getCantidad() {
        return `# total cuentas: ${ Cuenta.cantidad }`;
    }

    depositar( value ) {
        if( value > 0 )
            this.#saldoTotal += value;
        
        return this.formatearADosDecimales( this.#saldoTotal );
    }

    retirar( value ) {
        throw new Error( 'Debe implementar este método en su Clase' );  // Hacemos el método abstracto
    }

    /** _ Convencion para indicar que es un metodo privado, pero no aplica la restriccion como usando # */
    _retirar( value, commission ) {
        value = value * ( 1 + commission / 100 );
        if( value <= this.#saldoTotal )
            this.#saldoTotal -= value;

        return this.formatearADosDecimales( this.#saldoTotal );
    }

    transferir( CuentaDestino, value ) {
        this.retirar( value );
        CuentaDestino.depositar( value );
    }

    formatearADosDecimales( value ) {
        return Number.parseFloat( value ).toFixed( 2 );
    }

}