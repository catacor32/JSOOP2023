let array = [6, 8, 5, 1, 10, 4, 2, 3, 5, 9, 6, 2, 7, 1];
let newArray = [...new Set(array)];
newArray.sort(function(a,b){return a - b});
console.log(newArray)