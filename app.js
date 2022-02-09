const {crearArchivo} = require('./src/helpers/multiplicar');
const argv = require('./src/config/yargs');

require('colors');

console.clear();

crearArchivo(argv.b, argv.h, argv.l)
    .then(nameArchive => console.log(nameArchive.rainbow, 'create'))
    .catch(err => console.log(err));