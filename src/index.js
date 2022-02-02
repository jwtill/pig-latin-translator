export function wordsWithVowel(word) {
  if (
    word[0].toLowerCase() === "a" ||
    word[0].toLowerCase() === "e" ||
    word[0].toLowerCase() === "i" ||
    word[0].toLowerCase() === "o" ||
    word[0].toLowerCase() === "u"
  ) {
    return word + "way";
  } else {
    return word;
  }
}
export function wordsWithCons(word) {
  for (let i = 0; i < word.length; i++) {
    if (
      word[i].toLowerCase() === "a" ||
      word[i].toLowerCase() === "e" ||
      word[i].toLowerCase() === "i" ||
      word[i].toLowerCase() === "o" ||
      word[i].toLowerCase() === "u"
    ) {
      return word.slice(i) + word.slice(0, i) + "ay";
    }
  }
  return word;
}

// For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u." Don't treat "y" as a vowel. Examples: "away" becomes "awayway" and "okay" becomes "okayway."

// For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". Examples: "code" becomes "odecay" and "move" becomes "ovemay."

// If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first! Examples: "quick" becomes "ickquay" while "squeal" becomes "quealsay."
