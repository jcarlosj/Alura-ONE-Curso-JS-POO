import { Cuenta } from './Cuenta.js';


const
    cuentaJuan = new Cuenta( 'Juan', '986654353-0' ),
    cuentaSofia = new Cuenta( 'Sofia', '986344521-0' );

console.group( Cuenta.getCuentas() );
console.log( cuentaJuan );
console.log( cuentaSofia );
console.groupEnd();
