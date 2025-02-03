import logger from './logger.mjs';
import fs from 'node:fs';

const data = fs.readFileSync('./index.mjs');
logger.info(data);

fs.writeFileSync('./file.txt', ["kuku", "kukareku","hjgasjhsa", "Hello World!"].join('\n'));
