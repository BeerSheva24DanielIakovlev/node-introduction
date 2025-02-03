import logger from './logger.mjs';
import fs from 'node:fs';

const data = fs.readFileSync('./index.mjs', 'utf8');
logger.info(data);

fs.writeFileSync('./file.txt', ["kuku", "kukareku","hjgasjhsa", "Hello World!"].join('\n'), 'utf8');
