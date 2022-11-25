const colors = require("colors");
const fs = require("fs");

const tablaMultiplicar = async (base, hasta, listar) => {
   
    try {

        let salida = "";
        let salida1 = "";
        
        for(let i = 1; i<= hasta; i++){
            salida += `${base} ${"x".red} ${i} ${"=".red} ${ base * i }\n`
            salida1 += `${base} x ${i} = ${ base * i }\n`
        };

        
         
        if (listar){
            console.log('---------------------'.red);
            console.log(`tabla del ${colors.red(base)} hasta el ${colors.red(hasta)}`);
            console.log('---------------------'.red);

            console.log(salida);
        };

        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida1);
    
        const nombreArchivo = `tabla-${base}.txt`;
            
        return nombreArchivo;

    } catch (err) {
        throw err;
    };

};

const tablaMultiplicarNew = (numero) => {
    let salida = "";

    console.log('---------------------');
    console.log('   tabla del', numero);
    console.log('---------------------');

    for(let i = 1; i<= 10; i++){
        salida += `${numero} x ${i} = ${ numero * i }\n`
    };

    console.log(salida);

    return new Promise ((resolve, reject)=>{

        let salida = "";

        console.log('---------------------');
        console.log('   tabla del', numero);
        console.log('---------------------');
    
        for(let i = 1; i<= 10; i++){
            salida += `${numero} x ${i} = ${ numero * i }\n`
        };
    
        console.log(salida);

        fs.writeFileSync(`tabla-${numero}.txt`, salida);

        const nombreArchivo = `tabla-${numero}.txt`;

        if(numero){
            resolve(nombreArchivo)
        } else {
            reject(err)
        };

    });
};




module.exports = {
    tablaMultiplicar,
    tablaMultiplicarNew
};