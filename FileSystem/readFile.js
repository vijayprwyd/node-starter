const fs = require('fs');

const data = fs.readFileSync('../data/fruits.json', 'utf-8');
console.log('Data read ...' + data);

