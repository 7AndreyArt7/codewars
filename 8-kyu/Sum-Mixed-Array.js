// Description:
//     Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
//     Return your answer as a number.

function sumMix(x){
    let sum = x.map(Number);
if (sum.length === 0){
    return 0;
}{
    return sum[0] + sumMix(sum.slice(1));
    }
}

console.log( sumMix( [1,2,"3",4,"8"]));