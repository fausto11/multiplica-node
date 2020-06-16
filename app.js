//x yargs creamos heramientas interactivas para el usuario 
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
//importamos las funciones 
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.bgBlue(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');
}



//console.log(process.argv);

//let argv2 = process.argv;

// let parametro = argv[2];
// //split para separar elementos convertir de un str a arreglo
// let base = parametro.split('=')[1]

//console.log(argv.base);
//console.log('Limite', argv.limite);