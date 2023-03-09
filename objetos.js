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

        for (let i = 0; i < arrayCuentas.length; i++) {

            if (cliente === arrayCuentas[i].titularCuenta) {
                return arrayCuentas[i];
            }

        }

        // if (cliente == this.clientes.titularCuenta) {
        //     console.log(banco.clientes.nroCuenta);

    }

}

let clienteEncontrado = banco.consultarCliente("Abigael Natte");
console.log(clienteEncontrado);

// console.log(banco.clientes[4]);
// console.log(banco.clientes.titularCuenta);