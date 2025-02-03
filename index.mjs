import logger from './logger.mjs';
import { readFile, writeFile } from 'node:fs/promises';

const data = await fs.readFileSync('./file.txt', 'utf-16le');
console.log(data);


writeFile('./file.txt', ["kuku", "kukareku","hjgasjhsa", "Hello World!"].join('\n'), 'utf-16le');
logger.info("function finished");

//плохие новости... этот и пару предыдущих коммитов я не понял от слова вообще...