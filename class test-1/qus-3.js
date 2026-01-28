const users = [ { id: 1, name: "Anu", age: 22, role: "student", active: true }, { id: 2, name: "Meena",
age: 25, role: "developer", active: false }, { id: 3, name: "Riya", age: 21, role: "student", active: true },
{ id: 4, name: "Kiran", age: 28, role: "trainer", active: true } ];

// 3 Use map to create a new array of objects with name and role only

let mapFunction = users.map((data)=>{
    return{
        name: data.name,
       role: data.role
    }
})
console.log(mapFunction);

// output

// [
//   { name: 'Anu', role: 'student' },
//   { name: 'Meena', role: 'developer' },
//   { name: 'Riya', role: 'student' },
//   { name: 'Kiran', role: 'trainer' }  
// ]
