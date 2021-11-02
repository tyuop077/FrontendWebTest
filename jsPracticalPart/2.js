const checkForAnagram = (word1, word2) => {
    const sorted1 = word1.split("").sort().join("");
    const sorted2 = word2.split("").sort().join("");
    const anagram = sorted1 === sorted2;
    return {sorted1, sorted2, anagram}
}

console.log(checkForAnagram("gallery", "allergy"));
console.log(checkForAnagram("lemon", "melon"));
console.log(checkForAnagram("hello", "world"));

/*
Result:
{ sorted1: 'aegllry', sorted2: 'aegllry', anagram: true }
{ sorted1: 'elmno', sorted2: 'elmno', anagram: true }
{ sorted1: 'ehllo', sorted2: 'dlorw', anagram: false }
 */