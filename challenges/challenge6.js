// Write a function that takes in an array of integers and sums the 2 smallest numbers.
// IE: sumTwoSmallest([10,6,3,5,2,7,1]) // Outputs => 3

function SumTwo(numList) {
  numList.sort((a, b) => a - b);
  return numList[0] + numList[1];
}

// how ryan did this

function sumTwoSmallest(arrOfNums) {
  const sorted = [...arrOfNums].sort((a, b) => a - b);

  return sorted[0] + sorted[1];
}

// function sumTwoSmallest(arrOfNums) {
//   let lowest = arrOfNums[0];
//   let second = 0;

//   arrOfNums.forEach((num) => {
//     if (num < lowest) {
//       [second, lowest] = [lowest, second];
//     }
//   });

//   return lowest + second;
// }

console.log(sumTwoSmallest([5, 8, 12, 19, 22]));
console.log(sumTwoSmallest([10, 6, 3, 5, 2, 7, 1]));
console.log("\n");

// how John did it

const johnSumTwoSmallest = (arr) => {
  const smallest = arr.splice(arr.indexOf(Math.min(...arr)), 1);
  const secondSmallest = arr.splice(arr.indexOf(Math.min(...arr)), 1);

  return +smallest + +secondSmallest;
};

const example = johnSumTwoSmallest([10, 6, 3, 5, 2, 7, 1]);

console.log(example);
