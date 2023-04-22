/* 
Create a function that takes an array of numbers 
and return both the minimum and maximum numbers, in that order.
*/

function minMax(arr) {
   
    arr.sort(function(a, b) {
      return a - b; })
        
    let newArr = [];
    let min = arr[0];
    let max = arr[arr.length - 1]
    
    newArr.push(min)
    newArr.push(max)
    
    return newArr
    }