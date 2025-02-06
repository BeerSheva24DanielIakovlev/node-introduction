import logger from "./logger.mjs";

class LogDistribution {
    #counts;

    constructor() {
        this.#counts = {};
        logger.on('message', ({ level }) => {
            this.#counts[level] = (this.#counts[level] || 0) + 1;
        });
    }

    getDistribution() {
        return this.#counts;
    }

    reset() {
        this.#counts = {};
    }
}

const logDistribution = new LogDistribution();
export default logDistribution;
