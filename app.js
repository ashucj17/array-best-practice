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

// let student = {
// name: "Amit",
// age: 20,
// grade: "A",
// address: {
// street: "123 Main St",
// city: "Kanpur",
// country: "India",
// },
// };
// console.log(student.name);
// student.phone = "123-456-7890";
//
// console.log(student);
//
// delete student.grade;
// console.log(student);
//
// student.age = 21;
// console.log(student);
// let num;
// if (num > 0);
// console.log("number is (1)");

// let arr = [3, 6, 5, 43, 6, 7];
// console.log(arr);
// arr.push(2); //adding an element at the last index
// arr.unshift(76); // adding element aat the start
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// console.log(arr.slice(1, 6)); // it will provide the coppy of the array from start to end point where end point is not included
// console.log(arr);
// arr.splice(5, 0, "alien", "rabbit"); // it will use to add the element at the given index .
// console.log(arr.length);
// let newarr = [46, 68];
// let finalarr = arr.concat(newarr);
// console.log(finalarr);

// let favSingers = ["Honey Singh", "Diljit", "KK"];
// console.log(favSingers[0]);
// let mixArr = ["alpha", ["lamda", "gama"], 123, "two"];
// console.log(mixArr[1][1]);

// let arr_ts = [1, 2, 3, 4, 5, 6];
// let arr_rs = [9, 8, 7, 6];
// console.log(arr_ts);
// arr_ts.push(arr_rs);
// console.log(arr_ts);
// let conArray = arr_ts.concat(arr_rs);
// console.log(conArray);

// let myArray = [...arr_ts, ...arr_rs]; /* Using spread operator */
// console.log(myArray);
// let arr_mt = [7, 4, 1, 2, [5, 8], 3, 6, [7, 8, 9]];
// let revised_arr = arr_mt.flat(1);
// console.log(revised_arr);

console.log(Array.isArray("Ashish"));
console.log(Array.from("Ashish"));
console.log(Array.of("Ashish"));
