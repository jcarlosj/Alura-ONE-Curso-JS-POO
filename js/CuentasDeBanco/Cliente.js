export class Cliente {
    #fullName;
    #numeroCedula;
    #correo;
    #clave;

    static cantidad = 0;        // Atributo estático de la Clase

    constructor( fullName, numeroCedula, correo ) {
        this.#fullName = fullName;
        this.#numeroCedula = numeroCedula;
        this.#correo = correo;
        this.#clave = '';

        Cliente.cantidad ++;
    }

    get clave() {
        return this.#clave;
    }
    set clave( newClave ) {
        this.#clave = newClave;
    }

    // Metodo estático de la clase
    static getCantidad() {
        return `# total clientes: ${ Cliente.cantidad }`;
    }
}