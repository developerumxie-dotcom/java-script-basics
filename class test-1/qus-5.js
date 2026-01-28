const users = [
  { id: 1, name: "Anu", age: 22, role: "student", active: true },
  { id: 2, name: "Meena", age: 25, role: "developer", active: false },
  { id: 3, name: "Riya", age: 21, role: "student", active: true },
  { id: 4, name: "Kiran", age: 28, role: "trainer", active: true },
];

// 5 Use filter to get users whose role is 'student'.
let activeuser = users.filter((data,index,array)=>{
   return data.role=="student"
       
    })
    console.log(activeuser);

//     out put 

//     [
//   { id: 1, name: 'Anu', age: 22, role: 'student', active: true },
//   { id: 3, name: 'Riya', age: 21, role: 'student', active: true }
// ]