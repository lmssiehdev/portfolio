// Import or require your wordFilter function here
import { describe, expect, it } from "vitest";
import { wordFilter } from "../filterBadWords";

const expampleBadWord = "ass";

describe("wordFilter function", () => {
  it("Censor a single bad word in the middle of a sentence", () => {
    const inputText = `This is a test sentence with a ${expampleBadWord} word: ${expampleBadWord}hole.`;
    const expectedOutput = "This is a test sentence with a *** word: ***hole.";
    expect(wordFilter(inputText)).toBe(expectedOutput);
  });

  it("Censor multiple occurrences of a bad word in a sentence", () => {
    const inputText = `This is a ${expampleBadWord} and another ${expampleBadWord}.`;
    const expectedOutput = "This is a *** and another ***.";
    expect(wordFilter(inputText)).toBe(expectedOutput);
  });

  it("Censor a bad word surrounded by special characters", () => {
    const inputText = `This !@#${expampleBadWord}!@# is censored.`;
    const expectedOutput = "This !@#***!@# is censored.";
    expect(wordFilter(inputText)).toBe(expectedOutput);
  });
});
