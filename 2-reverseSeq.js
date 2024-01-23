// WPU Coding Challenge 2024
// 2/366
// Level: 8kyu
// 23 Jan 2021 8:44 PM

// const reverseSeq = (n) => {
//   let result = [];
//   for (let i = n; i > 0; i--) {
//     result.push(i);
//   }
//   return result;
// };

// const reverseSeq = (n) =>
//   Array(n)
//     .fill(0)
//     .map((_, i) => i + 1)
//     .reverse();

// const reverseSeq = (n) =>
//   Array(n)
//     .fill(0)
//     .map((_, i) => n - i);

const reverseSeq = (length) => Array.from({ length }, () => length--);

console.log(reverseSeq(5));
