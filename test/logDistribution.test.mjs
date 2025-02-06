import { describe, it, expect, beforeEach } from "vitest";
import logger from "../logger.mjs";
import logDistribution from "../logDistribution.mjs";

describe("LogDistribution", () => {
    beforeEach(() => {
        logDistribution.reset(); 
    });

    it("should count log messages correctly", async () => {
        logger.log("info", "Test info message");
        logger.log("error", "Test error message");
        logger.log("info", "Another info message");

        await new Promise(resolve => setTimeout(resolve, 50));

        expect(logDistribution.getDistribution()).toEqual({
            info: 2,
            error: 1
        });
    });

    it("should return an empty object when no logs", () => {
        expect(logDistribution.getDistribution()).toEqual({});
    });
});
