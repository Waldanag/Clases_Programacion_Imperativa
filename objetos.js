let arrayCuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];

let banco = {
    clientes: arrayCuentas,

    consultarCliente: function (cliente) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (cliente === this.clientes[i].titularCuenta) {
                return this.clientes[i];
            }
        }
    },

    deposito: function ( nombre, cantidad ) {
        let objetoCliente = this.consultarCliente(nombre)
        objetoCliente.saldoEnPesos += cantidad
        console.log(`Depósito realizado, su nuevo saldo es: ${objetoCliente.saldoEnPesos}.`);
    },

    extraccion: function( nombre, cantidad ){
        let objetoCliente = this.consultarCliente(nombre)
        if ( objetoCliente.saldoEnPesos > cantidad) {
            objetoCliente.saldoEnPesos -= cantidad
            console.log(`Extracción realizada correctamente, su nuevo saldo es: ${objetoCliente.saldoEnPesos}.`);
        } else {
            console.log("Fondos Insuficientes");
        }
    }
}

// let clienteEncontrado = banco.consultarCliente("Jacki Shurmer");
// console.log(clienteEncontrado);

// console.log( banco.consultarCliente("Jacki Shurmer") );
// let respuestaDelCajero = banco.deposito("Jacki Shurmer", 20000)
// console.log( respuestaDelCajero );

let respuestaRetiroCajero = banco.extraccion("Ansel Ardley", 40000)
console.log(respuestaRetiroCajero);