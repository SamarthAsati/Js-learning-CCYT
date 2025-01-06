const name = "Samarth"
const age = 24

console.log(`My name is ${name} and i'm of age ${age}`);

const String1 = new String (`I work at Capgemini work`);
const String2 = new String (`  Capgemini  `);

console.log(String1);
console.log(String2);
console.log(String2.trim());
console.log(String1.replace('work', 'worked'));
console.log(String1.replaceAll('work', 'worked'));
console.log(String1.match('work'));
