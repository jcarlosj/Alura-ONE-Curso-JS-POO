import { Cuenta } from '../CuentasDeBanco/Cuenta.js';
import { CuentaCorriente } from '../CuentasDeBanco/CuentaCorriente.js';
import { CuentaAhorros } from '../CuentasDeBanco/CuentaAhorros.js';
import { Cliente } from '../CuentasDeBanco/Cliente.js';

export function showData( cuentas ) {
    let
        totalCuentas = Cuenta.getCantidad(),
        cantCCorrientes = CuentaCorriente.getCantidad(),
        cantCAhorros = CuentaAhorros.getCantidad(),
        cantClientes = Cliente.getCantidad();

    console.group( `${ totalCuentas } \n${ cantCCorrientes }, \n${ cantCAhorros }, \n${ cantClientes }` );
    cuentas.forEach( cuenta => {
        console.log( cuenta );
    });
    console.groupEnd();
}