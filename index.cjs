// // console.log(global);
// // console.log(module);
// function name(exports, __dirname, __filename, require, module) {
//     // code
// }
// ---------------------------------------------------------------------
const logger = require('./logger.cjs');
logger.log("kuku");
console.log(logger);
const path = require('node:path');
logger.log(path.parse(__filename));