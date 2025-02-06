import winston from 'winston';
import { EventEmitter } from 'node:events';

class Logger extends EventEmitter {
    #logger;

    constructor() {
        super();
        this.#logger = winston.createLogger({
            level: process.env.LEVEL ?? 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: 'logs/app.log' })
            ]
        });

        this.on('error', (message) => {
            console.error(`Logger caught an error: ${message}`);
        });
    }

    log(level, message) {
        this.#logger.log({ level, message });
        this.emit(level, message);
        this.emit('message', { level, message });
    }
}

const loggerInstance = new Logger();
export default loggerInstance;
