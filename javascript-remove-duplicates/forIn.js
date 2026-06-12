const numbers = [1, 2, 3, 6, 2, 5, 9, 11, 54, 11, 56, 69, 11];

const uniqueNumbers = [];

for (const index in numbers) {
  const num = numbers[index];

  if (!uniqueNumbers.includes(num)) {
    uniqueNumbers.push(num);
  }
}

console.log(`Unique Numbers - ${uniqueNumbers}`);
