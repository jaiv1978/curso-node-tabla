const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    default: 12,
                    describe: 'Define cuantos items tendrá la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }

                    if (isNaN(argv.h)){
                        throw 'El parametro hasta tiene que ser un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;