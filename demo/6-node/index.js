// console.log('process', process)
/**
 * Lancement de l'application avec 
 *  node index.js PRODUCTION
 *  ou
 * npm run demo:prod
*/
const env = process.argv[2]

if(env === 'PRODUCTION' ) {
    console.log('en env de production')
} else {
    console.log('dev')
}