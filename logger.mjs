import winston, { Logger } from 'winston';
import {EventEmiter} from 'node:events';
 
class logger extends EventEmiter {
    #logger;
    constructor() {
        this.#logger = winston.createLogger({
            level:process.env.LEVEL ?? 'info',
            format: winston.format.simple(),
            transports: [new winston.transports.Console]
        });
    };

    log(level, message) {
        this.#logger.log(level, message);
        this.emit(level, message);
        this.emit('message', {level, message});
    };
};

const logger = new Logger();
export default logger;
