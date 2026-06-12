const names = ["anita", "boby", "chandu", "delon", "raj", "anita", "boby"]

const removeDuplicateNames = names.filter((n, i) => {
    return names.indexOf(n) === i
})

console.log(`Filtered Names - ${removeDuplicateNames.join(", ")}`);
