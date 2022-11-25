const {argv} = require("./config/yargs")
const { tablaMultiplicar} = require("./helpers/multiplicar");


console.clear();

tablaMultiplicar(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creada'))
    .catch(err => console.log(err))

// console.log(process.argv);
// console.log(argv);
// console.log("La base es de: ", argv.base);









// const [,,arg3 = "base=5"] = process.argv
// const [,base = 5] = arg3.split("=")
// console.log(arg3);
// console.log(base);


// tablaMultiplicarNew(3)
//     .then(console.log)
//     .catch(console.log)