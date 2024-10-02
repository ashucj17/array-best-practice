// let shoppingList = [
//   "milk",
//   "eggs",
//   "bread",
//   ["apples", "bananas", "oranges"],
//   ["potatos", "tomatos", "onions"],
// ];
// // console.log(shoppingList[0]);
// // shoppingList[4].push("carrot");
// // console.log(shoppi4ngList);
// // shoppingList.pop();
// console.log("before splice", shoppingList);
// // console.log(shoppingList[4]);
// shoppingList[4].splice(1, 2, "Cucumbers", "Bell Peppers");
// console.log("after splice", shoppingList);

let student = {
  name: "Amit",
  age: 20,
  grade: "A",
  address: {
    street: "123 Main St",
    city: "Kanpur",
    country: "India",
  },
};
console.log(student.name);
student.phone = "123-456-7890";

console.log(student);

delete student.grade;
console.log(student);

student.age = 21;
console.log(student);
