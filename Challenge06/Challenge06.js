'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------

const findMax = (arr)=>{
    let max=arr[0];
    // write your code here 
    for (let i=1; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];   
        }}
    return max;

}

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------

const sumNums = (arr)=>{
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= '0' && arr[i]<='9')
        sum += array[i]
    return sum;
}
}
// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
const reverseArray = (arr)=>{
/*   let rev= new Array [arr.length];
    for (let i = 0; i < arr.length; i++){
        for (let j = arr.length-1; j =0; j--) 
        rev[j]=arr[i];
       
    }
    return rev;*/
}

module.exports = {findMax , sumNums, reverseArray};