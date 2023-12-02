
#include <span>
#include <array>
#include <string>
#include <vector>
#include <string_view>
using namespace std;

class Solution {
    
    static const int ALPHABET_SIZE = 26;

public:
    int countCharacters(const vector<string>& words, string availableLettersToFormWords) const {
        array<int, ALPHABET_SIZE>frequencyAvailableLetters{};
        for (const auto& letter : availableLettersToFormWords) {
            ++frequencyAvailableLetters[letter - 'a'];
        }

        int sumOfLengthsOfAllWordsThatCanBeFormed = 0;
        for (const auto& word : words) {
            if (wordCanBeFormed(word, frequencyAvailableLetters)) {
                sumOfLengthsOfAllWordsThatCanBeFormed += word.length();
            }
        }

        return sumOfLengthsOfAllWordsThatCanBeFormed;
    }

private:
    bool wordCanBeFormed(string_view word, span<const int> frequencyAvailableLetters) const {
        array<int, ALPHABET_SIZE> frequency{};
        copy(frequencyAvailableLetters.begin(), frequencyAvailableLetters.end(), frequency.begin());
        for (const auto& letter : word) {
            if (--frequency[letter - 'a'] < 0) {
                return false;
            }
        }
        return true;
    }
};
