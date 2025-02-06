import { describe, it, expect, beforeEach } from "vitest";
import logger from "../logger.mjs";
import logSearch from "../logSearch.mjs";

describe("LogSearch", () => {
    beforeEach(() => {
        logSearch.reset();
    });

    it("should find messages by level and keyword", async () => {
        logger.log("info", "Hello, world!");
        logger.log("error", "Something went wrong!");
        logger.log("info", "Hello again!");

        await new Promise(resolve => setTimeout(resolve, 50));

        const result = logSearch.search("info", "hello");

        expect(result.length).toBe(2);
        expect(result).toEqual([
            { level: "info", message: "Hello, world!" },
            { level: "info", message: "Hello again!" }
        ]);
    });

    it("should return an empty array when no messages match", async () => {
        logger.log("info", "Test message");

        await new Promise(resolve => setTimeout(resolve, 50));

        expect(logSearch.search("info", "not_found")).toEqual([]);
    });

    it("should be case insensitive", async () => {
        logger.log("info", "Hello, world!");
        logger.log("info", "This is another test");

        await new Promise(resolve => setTimeout(resolve, 50));

        expect(logSearch.search("info", "HELLO")).toHaveLength(1);
    });
});
