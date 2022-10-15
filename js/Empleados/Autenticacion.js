
// Interface: por que atributos y clases son compartidas al se implementadas en clases diferentes
export class Autenticacion {
    // static convertira el metodo y la clase en una clase estatica
    static login( usuario, clave ) {
        return usuario.clave === clave;     // clave ahora existe tanto en nuestra clase Empleado como en nuestra clase Cliente
    }
}