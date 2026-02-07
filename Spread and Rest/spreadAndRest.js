// console.log("I am Republic Day..");

//! Spread and Rest Operator in JavaScript
// let arr = [1, 2, 3, 4, 5];
// let arr1 = [2, 4, 6, 8, 10];
// let mergedArr = [...arr, ...arr1];
// console.log(mergedArr);

// let obj = {
//   user: "Amar",
//   email: "amar@google.io",
//   pass: "143@$",
// };
// console.log(obj);
// console.log({ ...obj });

// function getData({ user }) {
//   console.log(user);
// }

// getData({ ...obj });

// let myFun = (a, b, c) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };
// myFun(...arr);
// myfun(1, 2, 3, 4, 5)

function collectParams(...myparameter) {
  //   console.log(a, b, c, d, e, f, g, h);
  console.log(arguments);
  console.log(myparameter);
}

collectParams(1, 2, 3, 4, 5, 6, 7, 78);
