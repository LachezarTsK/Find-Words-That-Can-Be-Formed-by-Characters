
using System;

public class Solution
{
    private static readonly int ALPHABET_SIZE = 26;

    public int CountCharacters(string[] words, string availableLettersToFormWords)
    {
        int[] frequencyAvailableLetters = new int[ALPHABET_SIZE];
        foreach (char letter in availableLettersToFormWords)
        {
            ++frequencyAvailableLetters[letter - 'a'];
        }

        int sumOfLengthsOfAllWordsThatCanBeFormed = 0;
        foreach (String word in words)
        {
            if (WordCanBeFormed(word, frequencyAvailableLetters))
            {
                sumOfLengthsOfAllWordsThatCanBeFormed += word.Length;
            }
        }

        return sumOfLengthsOfAllWordsThatCanBeFormed;
    }

    private bool WordCanBeFormed(String word, int[] frequencyAvailableLetters)
    {
        int[] frequency = new int[ALPHABET_SIZE];
        Array.Copy(frequencyAvailableLetters, frequency, ALPHABET_SIZE);

        for (int i = 0; i < word.Length; ++i)
        {
            if (--frequency[word[i] - 'a'] < 0)
            {
                return false;
            }
        }
        return true;
    }
}
