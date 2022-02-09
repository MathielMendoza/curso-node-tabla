const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, hasta = 10, listar = false) => {
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
        }

        if (listar) {
            console.log('========================'.green);
            console.log('      Tabla del:'.green, colors.blue(base));
            console.log('========================'.green);
            console.log(consola);
        }

        fs.writeFileSync(`./src/salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}