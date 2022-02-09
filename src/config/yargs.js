const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla del multiplicar'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Es el limite de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;