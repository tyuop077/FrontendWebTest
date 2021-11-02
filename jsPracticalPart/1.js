// Похоже на задачу с получением даты по типу "Х дней, Х часов, Х минут, Х секунд", только возвращается количество, а не прибавленные строки чисел

const banknotes = [1000, 500, 200, 100, 50];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let current = randomIntFromInterval(1, 1500);

console.log(`Requested ${current} rubles.`)

let count = 0;

for (const banknote of banknotes) {
    console.log(`Gave ${count} banknote(s) yet... We have ${current} rubles left to give. Counting ${banknote} banknotes...`);
    count += Math.floor(current / banknote);
    current %= banknote;
}

if (current) console.log(`Couldn't give ${current} banknotes, I guess those are 50>, but I don't have those`);

console.log({current, count})