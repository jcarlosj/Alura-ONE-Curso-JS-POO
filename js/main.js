import { Cuenta } from './CuentasDeBanco/Cuenta.js';
import { CuentaAhorros } from './CuentasDeBanco/CuentaAhorros.js';
import { CuentaCorriente } from './CuentasDeBanco/CuentaCorriente.js';
import { Cliente } from './CuentasDeBanco/Cliente.js';

import { Empleado } from './Empleados/Empleado.js';
import { Director } from './Empleados/Director.js';
import { Gerente } from './Empleados/Gerente.js';

import { Autenticacion } from './Empleados/Autenticacion.js';

import { showData } from './helpers/helpers.js';

/** Cuenta de Banco */
const
    juan = new Cliente( 'Juan', '79878292', 'juan@correo.co' ),
    sofia = new Cliente( 'Sofia', '41710478', 'sofia@correo.co' );

const
    cuenta1 = new CuentaAhorros( juan, '986654353-0' ),
    cuenta2 = new CuentaAhorros( sofia, '986344521-0' ),
    cuenta3 = new CuentaCorriente( sofia, '783232221-3' );

    // showData([ cuenta1, cuenta2, cuenta3 ]);

    cuenta1.depositar( 500 );
    cuenta1.depositar( 50 );
    cuenta1.retirar( 120 );
    cuenta1.transferir( cuenta2, 400 );

/** Empleados Banco */
const
    empleado = new Empleado( 'Juan J', '79878292', 10000 ),
    gerente = new Gerente( 'Sofia G', '41710478', 12000 ),
    director = new Director( 'Milo J', '76232343', 15000 );

// Asignamos claves
empleado.clave = '81934';
director.clave = '63401';

console.log( 
    empleado, 
    empleado.bonificacion(),
    Autenticacion.login( empleado, '63401' )    // false
);
console.log( 
    gerente, 
    gerente.bonificacion(),
    Autenticacion.login( gerente, '63401' )     // false
);
console.log( 
    director, 
    director.bonificacion(),
    Autenticacion.login( director, '63401' )    // true
);
