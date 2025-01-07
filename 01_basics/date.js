const myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());

let newCreatedDate = new Date(2024,11,5,13,32,56)
// console.log(newCreatedDate.toLocaleString())

// let CreatedDate = new Date("05-01-2025 12:31")
// console.log(CreatedDate.toLocaleString())

// const myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(newCreatedDate.getTime());

// const player1 = new Date (2025,0,7,17,31,32)
// const player2 = new Date (2025,0,7,17,33,52)
// console.log(player1.getTime())
// console.log(player2.getTime())

// //In Seconds
// console.log(Math.round(player1.getTime()/1000))
// console.log(Math.round(player2.getTime()/1000))

console.log(myDate.toLocaleString('default',{
    weekday: "long",
    hour: "2-digit"
}))
