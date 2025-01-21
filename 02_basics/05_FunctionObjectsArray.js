//REST Operator - if no. of arguments are unknown in the function, we shall use REST(...) operator which will return all arguments in form of array
// function returnValue(...num1){
//     return num1
// }

// console.log(returnValue(20, 50))

//ObjectsInFunction
// const myEmployee = {
//     name: 'Sam' ,
//     age: 24
// }

// function bio(userData){
//     console.log(`Name of the employee is ${userData.name} and is of age ${userData.age}`)    
// }

// // bio(myEmployee)

// //We can also give arguments as objects
// bio(myEmployee = {
//     name: 'Sam' ,
//     age: 24
// })

//FunctionArray
function return2ndValue(value){
    return value[1]   
}

console.log(return2ndValue([400, 300, 432]))
