import { wordsWithVowel, wordsWithCons } from "./../src/index.js";

describe("wordsWithVowel", () => {
  it('should return the word plus "way" when the word begins with a vowel', () => {
    expect(wordsWithVowel("awesome")).toEqual("awesomeway");
  });
  it('should return the word plus "way" when the word begins with a vowel', () => {
    expect(wordsWithVowel("edgar")).toEqual("edgarway");
  });
  it("should return the word when it does not begin with a vowel", () => {
    expect(wordsWithVowel("cat")).toEqual("cat");
  });
  it('should return the word plus "way" when the word begins with an uppercase vowel', () => {
    expect(wordsWithVowel("Awesome")).toEqual("Awesomeway");
  });
});

describe("wordsWithCons", () => {
  it('should move all of the first consecutive consonants to the end and add "ay"', () => {
    expect(wordsWithCons("blog")).toEqual("ogblay");
  });
  it('should move all of the first consecutive consonants to the end and add "ay"', () => {
    expect(wordsWithCons("Dog")).toEqual("ogDay");
  });
  it('should move all of the first consecutive consonants to the end and add "ay"', () => {
    expect(wordsWithCons("glyph")).toEqual("glyph");
  });
});
