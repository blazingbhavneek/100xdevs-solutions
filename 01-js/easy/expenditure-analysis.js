/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let mp = {};
  transactions.forEach(element => {
    if(mp.hasOwnProperty(element.category)){
      let x = mp[element.category];
      mp[element.category]+=element.price;
    }
    else{
      mp[element.category] = element.price;
    }
  });

  let ans = [];
  Object.keys(mp).forEach(element=>{
    ans.push({
      "category": element,
      "totalSpent": mp[element]
    });
  });
  return ans;
}

module.exports = calculateTotalSpentByCategory;
