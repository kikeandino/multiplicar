const argv = require('./confi/yargs').argv;

const { crearArchivo, listartabla } = require('./mulplicar/multiplicar')


let comando = argv._[0]

switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('EL comando no es reconocido');


}




//let base = 'aa';


//let argv2 = process.argv;
//console.log('Limite', argv.base);
//console.log(argv2);

/* let parametro = argv[2];
let base = parametro.split('=')[1]


 */