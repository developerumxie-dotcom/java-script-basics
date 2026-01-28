const users = [ { id: 1, name: "Anu", age: 22, role: "student", active: true }, { id: 2, name: "Meena",
age: 25, role: "developer", active: false }, { id: 3, name: "Riya", age: 21, role: "student", active: true },
{ id: 4, name: "Kiran", age: 28, role: "trainer", active: true } ]

// 1. Use forEach to print each user name.

let foreachfunction = users.forEach((data)=>{
    console.log(data.name);
    

})
console.log(foreachfunction);

//1. output
// {
// Anu
// Meena
// Riya
// Kiran
// undefined
// }