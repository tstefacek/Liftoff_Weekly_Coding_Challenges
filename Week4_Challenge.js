/* Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 
Words may also contain numbers, for example "Hello world123 567"
*/

function LongestWord(sen) { 
    let rmvPunc = sen.replace(/[^A-Za-z0-9\s]/g,"");
    let senSplit = rmvPunc.split(" ");
    let senArr = [];
      for (let i = 0; i < senSplit.length; i++){
        senArr.push(senSplit[i]);
        
      }
     let longest = senArr.reduce((a, b) => b.length > a.length ? b : a, '');
    return longest
    }