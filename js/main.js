import { Cuenta } from './CuentasDeBanco/Cuenta.js';
import { CuentaAhorros } from './CuentasDeBanco/CuentaAhorros.js';
import { CuentaCorriente } from './CuentasDeBanco/CuentaCorriente.js';
import { Cliente } from './CuentasDeBanco/Cliente.js';

import { showData } from './helpers/helpers.js';


const
    juan = new Cliente( 'Juan', '79878292', 'juan@correo.co' ),
    sofia = new Cliente( 'Sofia', '41710478', 'sofia@correo.co' );

const
    cuenta1 = new CuentaAhorros( juan, '986654353-0' ),
    cuenta2 = new CuentaAhorros( sofia, '986344521-0' ),
    cuenta3 = new CuentaCorriente( sofia, '783232221-3' );
    
    showData([ cuenta1, cuenta2, cuenta3 ]);

    cuenta1.depositar( 500 );
    cuenta1.depositar( 50 );
    cuenta1.retirar( 120 );
    cuenta1.transferir( cuenta2, 400 );


