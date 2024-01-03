const fs = require('fs');


fs.writeFile('output.txt', 'Hello, World! from updated a.txt', 'utf8', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});

let sum=0;
for(let i=0; i<1000000000; i++){
  sum++;
}

console.log(sum);
