
/**
 * @param {string[]} words
 * @param {string} availableLettersToFormWords
 * @return {number}
 */
var countCharacters = function (words, availableLettersToFormWords) {
    this.ALPHABET_SIZE = 26;
    this.ASCII_SMALL_CASE_A = 97;

    const frequencyAvailableLetters = new Array(ALPHABET_SIZE).fill(0);
    for (let i = 0; i < availableLettersToFormWords.length; ++i) {
        ++frequencyAvailableLetters[availableLettersToFormWords.codePointAt(i) - this.ASCII_SMALL_CASE_A];
    }

    let sumOfLengthsOfAllWordsThatCanBeFormed = 0;
    for (let word of words) {
        if (wordCanBeFormed(word, frequencyAvailableLetters)) {
            sumOfLengthsOfAllWordsThatCanBeFormed += word.length;
        }
    }

    return sumOfLengthsOfAllWordsThatCanBeFormed;
};

/**
 * @param {string} word
 * @param {number[]} frequencyAvailableLetters
 * @return {boolean}
 */
function wordCanBeFormed(word, frequencyAvailableLetters) {
    const frequency = Array.from(frequencyAvailableLetters);
    for (let i = 0; i < word.length; ++i) {
        if (--frequency[word.codePointAt(i) - this.ASCII_SMALL_CASE_A] < 0) {
            return false;
        }
    }
    return true;
}
