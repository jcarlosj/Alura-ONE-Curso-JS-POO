
// Interface: por que atributos y clases son compartidas al se implementadas en clases diferentes
export class Autenticacion {
    // static convertira el metodo y la clase en una clase estatica
    static login( usuario, clave ) {

        // Valida si el atributo 'clave' y el metodo 'isAutenticable' existen dentro de la clase que implementa la interface
        if( 'clave' in usuario && usuario.isAutenticable instanceof Function )
            return usuario.isAutenticable( clave );
        else
            throw new Error( `La interface '${ Autenticacion.name }' indica que debe implementar el atributo "clave" y el metodo "isAutenticable" en la implementacion de la clase '${ usuario.constructor.name }'` );
        
    }
}