const numbers = [1, 2, 3, 6, 2, 5, 9, 11, 54, 11, 56, 69, 11];
const uniqueNumbers = [];
let i = 0;

while (i < numbers.length) {
  if (!uniqueNumbers.includes(numbers[i])) {
    uniqueNumbers.push(numbers[i]);
  }

  i++;
}

console.log(`Unique Numbers - ${uniqueNumbers}`);
