const fs = require('fs');

let str;
str = fs.readFileSync("a.txt", 'utf-8');

let arr =  str.split(' ');
let ans= [];
for(let i=0; i<arr.length; i++){
    if(arr[i]!==''){
        ans.push(arr[i]);
    }
}

ans = ans.join(' ');

fs.writeFileSync('output.txt', ans, 'utf-8');