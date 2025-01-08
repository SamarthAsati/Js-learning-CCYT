let Sym = Symbol("Key1")

const JSuser = {
    name: 'Samarth',
    'full name': 'Samarth Asati',
    age: 24,
    location: 'Noida',
    email:'samarth@gmial.com',
    [Sym] : 'Key4'
}

// console.log(JSuser["name"])
// console.log(JSuser["full name"])
// console.log(JSuser[Sym])


// Object.freeze(JSuser)

// JSuser.location = "Bengaluru"
// console.log(JSuser.location)
// console.log(JSuser)

JSuser.greeting = function(){
    console.log(`Hey ${this["full name"]}, welcome to JS`)
}
console.log(JSuser.greeting())