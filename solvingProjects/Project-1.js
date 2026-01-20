 function check(person){
    console.log("hey"+ person.name);
    if( person.age <=18){
        console.log("you are a adult person and your age is", person.age);
        
    }
    else{
        console.log("you are not adult person and your age is", person.age);
        
    }
    
 }
 check({ name:"sajad", age: 27})
 check({ name:"sajid", age: 18})
 check({ name:"imran", age: 17})
