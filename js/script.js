/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Anagrams - Script
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2020
 */

"use strict";

/* Function for checking if two strings are anagrams */
const anagramTest = (s1, s2) => {

  // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge
  //removed empty spaces from both strings
  s1 = s1.toLowerCase().replace(/\s/g,'');
  s2 = s2.toLowerCase().replace(/\s/g,'');

  //created an array based on the second string
  let s2Array = s2.split('');

  //return false if string size is not equal
  if(s1.length != s2.length){
    return false;
  }
  //checking every letter in sting one if it exist in the created array based on the second string, if yes removing it from an array
  for (let i=0; i<s1.length; i++){
    const currentLetterIndex = s2Array.indexOf(s1[i]);
  if(currentLetterIndex >=0){
    s2Array.splice(currentLetterIndex,1);
  }
}
//if after looping through entire first string there is no more letters left in the array based on the second string returning true 
if(!s2Array.length) {return true;}
//else returning false;
  return false;
}


/* btn listener */
document.querySelector('#btn').addEventListener('click', () => {

  // Test your anagramTest function
  displayResults(anagramTest);

  // Helpful log statement to test function - You can comment out this if you like
  console.log('Test button is functional!');
});