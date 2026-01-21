let umair = 10
let sajid = "sajid"
let Char = 'a'

let person = {      // key value pairs   key : value
    name : "sajid",
    age : 99,
    color : "red",
    sibiling : {count:2,location:"calicut"},
    fullName : function (){
        console.log("my name is muhammad",this.name,"& i'm", this.age, "old guy");
        
    }

}     

console.log(person.fullName());    // objectName.key


const sample = (num) => {
    console.log(num.companyName);
    
}

sample({companyName:"novox",location:"kozhikode"})


