
import java.util.Arrays;

public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public int countCharacters(String[] words, String availableLettersToFormWords) {
        int[] frequencyAvailableLetters = new int[ALPHABET_SIZE];
        for (int i = 0; i < availableLettersToFormWords.length(); ++i) {
            ++frequencyAvailableLetters[availableLettersToFormWords.charAt(i) - 'a'];
        }

        int sumOfLengthsOfAllWordsThatCanBeFormed = 0;
        for (String word : words) {
            if (wordCanBeFormed(word, frequencyAvailableLetters)) {
                sumOfLengthsOfAllWordsThatCanBeFormed += word.length();
            }
        }

        return sumOfLengthsOfAllWordsThatCanBeFormed;
    }

    private boolean wordCanBeFormed(String word, int[] frequencyAvailableLetters) {
        int[] frequency = Arrays.copyOf(frequencyAvailableLetters, ALPHABET_SIZE);
        for (int i = 0; i < word.length(); ++i) {
            if (--frequency[word.charAt(i) - 'a'] < 0) {
                return false;
            }
        }
        return true;
    }
}
