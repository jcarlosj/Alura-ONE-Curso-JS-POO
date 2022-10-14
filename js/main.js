class CuentaBanco {
    nombreTitular;
    numeroCuenta;
    saldo = 0;
    fechaApertura = new Date();
}

const cuentaJuan = new CuentaBanco();

cuentaJuan.nombreTitular = 'Juan';
cuentaJuan.numeroCuenta = '986654353-0';
cuentaJuan.saldo = 100;

console.log( cuentaJuan );