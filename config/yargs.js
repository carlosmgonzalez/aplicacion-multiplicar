
const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Es la base de la table de multiplicar"
    })
    .option("l",{
        alias: "listar",
        type: "boolean",
        default: false,
        describe: "Muestra la tabla en console"
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        default: 10
    })
    .check((argv, option) => {
        if(isNaN(argv.b)){
            throw "La base tiene que ser un número"
        } else if(isNaN(argv.h)){
            throw "Hasta tiene que ser un número"
        };
        return true
    })
    .argv;


    module.exports = {
        argv
    };