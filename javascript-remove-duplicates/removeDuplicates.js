const numbers = [1, 2, 3, 6, 2, 5, 9, 11, 54, 11, 56, 69, 11];

const uniqueNumbers = numbers.filter((num, index) => {
  return numbers.indexOf(num) === index;
});

console.log(`Unique Numbers - ${uniqueNumbers}`);
