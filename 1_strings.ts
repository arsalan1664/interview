// [x] Valid Anagram : same characters with the same frequencies
// [ ] Valid Palindrome
// [ ] Reverse String
// [ ] First Unique Character
// [ ] First Repeating Character
// [ ] Longest Common Prefix
// [ ] Group Anagrams
// [ ] Longest Palindromic Substring
// [ ] String Compression
// [ ] Is Subsequence

// 1. Valid Anagram
// Check whether two strings contain the same characters with the same frequencies, regardless of order.
// Example: "listen", "silent" → true

function isAnagram(str1: string, str2): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const chrMap = new Map<string, number>();

  for (const chr of str1) {
    chrMap.set(chr, (chrMap.get(chr) ?? 0) + 1);
  }

  for (const chr of str2) {
    chrMap.set(chr, (chrMap.get(chr) ?? 0) - 1);
  }

  const values = chrMap.values();

  for (const val of values) {
    if (val !== 0) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("listeb", "silent"))

// 2. Valid Palindrome
// Check whether a string reads the same forward and backward, ignoring spaces, punctuation and case.
// Example: "A man, a plan, a canal: Panama" → true

function isPalindrome(str1: string, str2: string): boolean {
  let reversedStr = "";
  for (let i = str2.length - 1; i >= 0; i--) {
    reversedStr += str1[i];
  }
  return reversedStr === str2;
}


console.log(isPalindrome("panama","amanap"))

// 3. Reverse String
// Reverse the characters of a string.
// Example: "hello" → "olleh"

function reverseStr(str: string): string {
  let reversedStr: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseStr("hello"));

// 4. First Unique Character
// Find the index of the first character that appears only once.
// Example: "leetcode" → 0 (l)

function firstUnique(str: string): number | null {
  const charMap = new Map<string, number>();

  for (const chr of str) {
    charMap.set(chr, (charMap.get(chr) ?? 0) + 1);
  }

  for (let i = 0; i < str.length - 1; i++) {
    if (charMap.get(str[i]) === 1) {
      return i;
    }
  }

  return null;
}

console.log(firstUnique("lleetcode"))

// 5. First Repeating Character
// Find the first character that appears more than once.
// Example: "programming" → "r"

function firstReapeating(str: string): number | null {
  const charMap = new Map<string, number>();

  for (const chr of str) {
    charMap.set(chr, (charMap.get(chr) ?? 0) + 1);
  }

  for (let i = 0; i < str.length - 1; i++) {
    if (charMap.get(str[i]) > 1) {
      return i;
    }
  }

  return null;
}

console.log(firstReapeating("leetcode"))

// 6. Longest Common Prefix
// Find the longest starting substring shared by all strings in an array.
// Example: ["flower", "flow", "flight"] → "fl"

// 7. Group Anagrams
// Group words that contain the same characters and character frequencies.
// Example: ["eat", "tea", "tan", "ate"] → [["eat","tea","ate"],["tan"]]

// 8. Longest Palindromic Substring
// Find the longest continuous substring that reads the same forward and backward.
// Example: "babad" → "bab" or "aba"

// 9. String Compression
// Compress consecutive repeating characters by replacing them with the character followed by its count.
// Example: "aaabbcccc" → "a3b2c4"

// 10. Is Subsequence
// Check whether all characters of one string appear in another string in the same order, but not necessarily consecutively.
// Example: "ace", "abcde" → true
