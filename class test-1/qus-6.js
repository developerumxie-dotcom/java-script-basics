const users = [
  { id: 1, name: "Anu", age: 22, role: "student", active: true },
  { id: 2, name: "Meena", age: 25, role: "developer", active: false },
  { id: 3, name: "Riya", age: 21, role: "student", active: true },
  { id: 4, name: "Kiran", age: 28, role: "trainer", active: true },
];

//Use find to get the user with id 3

let finduser= users.find((data)=>{
    return data.id==3
})
console.log(finduser);


// output 

// { id: 3, name: 'Riya', age: 21, role: 'student', active: true }
