//SINGLETON Object - If we create an object via below way
// const obj1 = new Object()
// obj1.name = 'sam'
// obj1.location = 'Noida'

// console.log(obj1)

// const obj1 = {
//     name: 'Samarth',
//     location: {
//         prev: 'Bangalore',
//         current: 'Noida',
//         desired: {
//             name: 'Hyderabad'
//         }
//     }
// }

// console.log(obj1.location?.desired)


//To add 2 or more objects
const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}
const obj3 = {5:'e', 6:'f'}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4)
// console.log(obj1)

//MOST COMMONLY used method to add 2 or more objects - spread operator
// const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)

//if let say we have array of objects, meaning multiple objects in a single array
// const obj4 = [
//     {
//         email: 'abc@gmail.com'
//     },
//     {
//         name: 'sam'
//     },
//     {
//         id: '1235ds'
//     }
// ]

// console.log(obj4[2].name)

console.log(Object.keys(obj1)) //to print all the keys of the object in the form of array
console.log(Object.values(obj1)) //to print all the values of keys of the object in the form of array
console.log(Object.entries(obj1)) //to print all the keys-values of the object in the form of array

//hasOwnProperty to find out if a certain key exists in the Obect or not
console.log(obj2.hasOwnProperty('4'))