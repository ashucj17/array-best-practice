let shoppingList = [
  "milk",
  "eggs",
  "bread",
  ["apples", "bananas", "oranges"],
  ["potatos", "tomatos", "onions"],
];
console.log("before splice", shoppingList);
// console.log(shoppingList[0]);
// shoppingList[4].push("carrot");
// console.log(shoppi4ngList);
// shoppingList.pop();
// console.log("before splice", shoppingList);
shoppingList[4].splice(1, 2, "Cucumbers", "Bell Peppers");
console.log("after splice", shoppingList);
