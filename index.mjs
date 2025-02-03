import logger from './logger.mjs';
import fs from 'node:fs';

const data = fs.readFileSync('./file.txt', 'base64', (err, data) => {
    if (err) {
        logger.error(err);
    } else {
        console.log(data);
        
    }
});
console.log(data);


fs.writeFileSync('./file.txt', ["kuku", "kukareku","hjgasjhsa", "Hello World!"].join('\n'),
  'utf-16le', () => logger.debug('file saved in utf-16le format'));
