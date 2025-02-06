import logger from "./logger.mjs";

class LogSearch {
    #messages;

    constructor() {
        this.#messages = [];
        logger.on('message', (log) => {
            this.#messages.push(log);
        });
    }

    search(level, keyword) {
        const lowerKeyword = keyword.toLowerCase();
        return this.#messages
            .filter(log => log.level === level && log.message.toLowerCase().includes(lowerKeyword));
    }

    reset() {
        this.#messages = [];
    }
}

const logSearch = new LogSearch();
export default logSearch;
