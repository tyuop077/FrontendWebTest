const numbers = [0, 1, 2, 3, 0, 4, 5];

// -- 1st solution --
/*
let zeros = 0;

while (numbers.includes(0)) {
    numbers.concat(numbers.indexOf(0), 1);
    zeros++;
}
for (let i = 0; i < zeros; i++) numbers.push(0);
}*/

// -- just all 0's (2nd solution) --
//const zeros = numbers.filter(num => num === 0).length

// -- 3rd solution (quick) --

for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] === 0) {
        numbers.splice(i, 1);
        numbers.push(0)
    }
}

console.log(numbers);