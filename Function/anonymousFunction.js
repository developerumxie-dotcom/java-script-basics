// const arrowFunct = () => {
//     console.log("h");
    
// }

// arrowFunct()



// (() => {
//     console.log("h");
    
// });








// function normalFunct () {
//     console.log("di");
    
// }
// normalFunct()


// (function  () {
//     console.log("di");
    
// })()

//IIFE Immeadiate invoked function expression


// pblm 1


// (function (num,num1) {
// console.log(num+num1);

// })(1,2)

// pbml 2  wrong
(function (num3,num4){

    return(num3*num4)
    
})
console.log((2*2));


// right
// const user = (function (num3,num4){

//     return(num3*num4)
    
// })(2,2)


// console.log(user);

const user = (function (num3,num4){

    return(num3*num4)
    
})(2,2)


console.log(user);


// const sum = (a,b) => {
//     return a*b
// }

// console.log(sum(10,209));

