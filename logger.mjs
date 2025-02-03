import winston from 'winston';
console.log('from index.mjs', process.env.LEVEL);



const logger = winston.createLogger({
    level:process.env.LEVEL ?? 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console
    ]
});

export default logger;