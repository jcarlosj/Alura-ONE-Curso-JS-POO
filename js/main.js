import { Cuenta } from './Cuenta.js';
import { Cliente } from './Cliente.js';


const
    juan = new Cliente( 'Juan', '79878292', 'juan@correo.co' ),
    sofia = new Cliente( 'Sofia', '41710478', 'sofia@correo.co' );

const
    cuenta1 = new Cuenta( juan, '986654353-0' ),
    cuenta2 = new Cuenta( sofia, '986344521-0' );
    
console.group( Cliente.getCantidad(),', ', Cuenta.getCantidad() );
console.log( cuenta1 );
console.log( cuenta2 );
console.groupEnd();
