const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base = 5, listar, hasta ) => {

    return new Promise((resolve, reject) => {
        let salida, consola = '';
        
        for (let i=1; i<=hasta; i++){
            salida += `${base} x ${i} = ${ base*i}\n` 
            consola += `${colors.white(base)} ${'x'.blue} ${i} = ${ colors.america((base*i).toString())}\n` 
        }
        
        if (listar) {
            console.log('=================')
            console.log (`Tabla del ${base}`)
            console.log('=================')
            console.log(consola);
        }

        const fileName = `./salida/tabla-${base}.txt`;
        try{
            fs.writeFileSync(fileName, salida);
            return resolve(fileName);
        }
        catch(err){
            return reject(err);
        }
    })
}

module.exports = { 
    crearArchivo 
}