//---------------------------------------- Øvelse 1 ----------------------------------------
let arr1 = [2, 5, 100]; 

let newArr1 = arr1.map((val, index, arr) => {
    return val * 2
}); 
console.log(newArr1);
// Result => 
// [4, 10, 200]


//---------------------------------------- Øvelse 2 ----------------------------------------
let arr2 = [2, 5, 100]; 

let newArr2 = arr2.map((val, index, arr) => {
return val.toString()
});
console.log(newArr2); 
// Result =>
// ["2", "5", "100"]

//---------------------------------------- Øvelse 3 ----------------------------------------
let arr3 = ["lone", "Allan", "Hello woRld", "tim22"]

let newArr3 = arr3.map((val, index, arr) => {
    return val.toUpperCase()
}); 
console.log(newArr3)
// Result => 
// ["LONE", "ALLAN", "HELLO WORLD", "TIM22"]

//---------------------------------------- Øvelse 4 ----------------------------------------
let arr4 = [
    { name: "Mads Mikkelsen", age: 80},
    { name: "Sofie Gråbøl", age: 2},
    { name: "Sidse Babett Knudsen", age: 5},
    { name: "Nikolaj Lie Kaas", age: 16},
    { name: "Frank Hvam", age: 100}];

let newArr4 = arr4.map((val, index, arr) => {
    return val.name 
})
console.log(newArr4)
// Result => 
// ["Mads Mikkelsen", "Sofie Gråbøl", "Sidse Babett Knudsen", "Nikolaj Lie Kaas", "Frank Hvam"]

//----------------------------------------  Øvelse 5 ----------------------------------------
let arr5 = [
    { name: "Mads Mikkelsen", age: 80},
    { name: "Sofie Gråbøl", age: 2},
    { name: "Sidse Babett Knudsen", age: 5},
    { name: "Nikolaj Lie Kaas", age: 16},
    { name: "Frank Hvam", age: 100}];

let newArr5 = arr5.map((val, index, arr) => {
    return val.age >= 18 ? `${val.name} er gamme nok` : `${val.name} er IKKE gammel nok!!`
});
console.log(newArr5)
// Result => 
// ["Mads Mikkelsen er gammel nok", 
// "Sofie Gråbøl er IKKE gammel nok!!", 
// "Sidse Babett Knudsen er IKKE gammel nok!!", 
// "Nikolaj Lie Kaas er IKKE gammel nok!!", 
// "Frank Hvam er gammel nok"]

//---------------------------------------- Øvelse 6 ----------------------------------------
let arr6 = [
    { name: "Mads Mikkelsen", age: 80},
    { name: "Sofie Gråbøl", age: 2},
    { name: "Sidse Babett Knudsen", age: 5},
    { name: "Nikolaj Lie Kaas", age: 16},
    { name: "Frank Hvam", age: 100}];

let newArr6 = arr6.map((val, index, arr) => {
    return val = `<h1>${val.name}</h1> <h2>${val.age}</h2>`
});
console.log(newArr6)
// Result =>
// ["<h1>Mads Mikkelsen</h1><h2>80</h2>", 
// "<h1>Sofie Gråbøl</h1><h2>2</h2>", 
// "<h1>Sidse Babett Knudsen</h1><h2>5</h2>", 
// "<h1>Nikolaj Lie Kaas</h1><h2>16</h2>", 
// "<h1>Frank Hvam</h1><h2>100</h2>"]