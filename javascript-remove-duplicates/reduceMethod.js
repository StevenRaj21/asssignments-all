const numbers = [1, 2, 3, 6, 2, 5, 9, 11, 54, 11, 56, 69, 11];

const uniqueNumbers = numbers.reduce((result, num) => {
  const checkNumber = result.includes(num);

  if (!checkNumber) {
    result.push(num);
  }

  return result;
}, []);

console.log(`Unique Numbers - ${uniqueNumbers}`);
