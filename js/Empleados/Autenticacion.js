
// Interface: por que atributos y clases son compartidas al se implementadas en clases diferentes
export class Autenticacion {
    // static convertira el metodo y la clase en una clase estatica
    static login( usuario, clave ) {
        try {
            return usuario.isAutenticable( clave );    // clave ahora existe tanto en nuestra clase Empleado como en nuestra clase Cliente y obliga a la implentacion del metodo 'isAutenticable' en todas las clases que implementen esta clase o interface
        }
        catch ( e ) {
            // console.log( e );   // return usuario.isAutenticable( clave );    // clave ahora existe tanto en nuestra clase Empleado como en nuestra clase Cliente y obliga a la implentacion del metodo 'isAutenticable' en todas las clases que implementen esta clase o interface
            throw new Error( 'Esta interface le obliga a definir el metodo "isAutenticable" en la implementacion de su clase' );
        }
        
    }
}