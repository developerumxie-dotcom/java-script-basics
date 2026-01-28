
const users = [ { id: 1, name: "Anu", age: 22, role: "student", active: true }, { id: 2, name: "Meena",
age: 25, role: "developer", active: false }, { id: 3, name: "Riya", age: 21, role: "student", active: true },
{ id: 4, name: "Kiran", age: 28, role: "trainer", active: true } ];


//2. Use map to create a new array of only user names

let mapFunction = users.map((data)=>{
    return data.name
})
console.log(mapFunction);

// out put

// [ 'Anu', 'Meena', 'Riya', 'Kiran' ]