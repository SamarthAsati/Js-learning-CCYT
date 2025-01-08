const MCU = ['RDJ', 'Cap','Romanoff']
const DCU = ['Bale','Pattinson','Gadot']
const BCU = ['VD', 'shraddha']
// MCU.push(DCU)
// console.log(MCU)

// concat adds 2 array and gives output as a new array - it doesn't make changes in original array
// MCU.concat(DCU)
// console.log(MCU)
// console.log(MCU.concat(DCU))

// spread can add multiple arrays but gives o/p as string unless we specifically create a new array for it
// console.log(...MCU, ...DCU,...BCU);
// const CU = [...MCU, ...DCU,...BCU]
// console.log(CU)

//flat is used if in case we have multiple arrays inside a single array and we want o/p as a single array
// const anotherArr = [1,2,3,[4,5,6,[2,7,3],7,9]]
// const finalArr = anotherArr.flat(Infinity)
// console.log(finalArr)

//isArray is to identify if the given parameter is array or not
// console.log(Array.isArray(['Hello']))
// console.log(Array.isArray('Hello'))

//(INTERESTING TOPIC) .from (NEED TO BE STUDIED MORE)
// console.log(Array.from('Samarth'))
// console.log(Array.from({name:'Hello'}))

//.of returns a new array from a set of elements
// let S1 = 100
// let S2 = 200
// let S3 = 300
// console.log(Array.of(S1,S2,S3))