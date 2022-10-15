export class Autenticacion {
    // static convertira el metodo y la clase en una clase estatica
    static login( usuario, clave ) {
        return usuario.clave === clave;
    }
}