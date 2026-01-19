const functionA = (callback) => {
    console.log("it is a function A");
    callback()  //functionB()
     

}

const functionB = ()=> {
    console.log("it is a fun B");
    

}

functionA(functionB)  //call back fun




