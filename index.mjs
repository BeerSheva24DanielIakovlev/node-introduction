import logger from './logger.mjs';
import logDistribution from './logDistribution.mjs';
import logSearch from './logSearch.mjs';

//TODO
// main controller functionality

// Генерируем тестовые логи
logger.log('info', 'Hello, world!');
logger.log('error', 'Something went wrong!');
logger.log('info', 'Another info message');
logger.log('debug', 'Debugging...');
logger.log('info', 'Hello again!');
logger.log('error', 'Critical error!');
logger.log('debug', 'Deep debugging...');
logger.log('info', 'Logger test complete');

// Проверяем распределение логов
console.log("Log Distribution:", logDistribution.getDistribution());

// Ищем все "info" сообщения, содержащие "hello"
console.log("Search Result:", logSearch.search("info", "hello"));
