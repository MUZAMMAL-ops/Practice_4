const { includes, find, some, words } = require("lodash")

//Finding Length of An Array
let arr = [23,4,8, 7,3,476,734,8,34]
let arr_1 = [324,435,456,34,45,54]
const arr_5 =[
 arr_2 = {name:"muzammal",age:26,id:1},
 arr_3 = {name:"robert",age:44,id:2},
 arr_4 = {name:"muzammal",age:26,id:3}
]
let values = arr.length
console.log(values)
//Returns the array in reverse order
let values_1 = arr.reverse()
console.log(values_1)
//Sorting in array
let values_2 = arr.sort()
console.log(values_2)
//filling of array
let value_3 = arr.fill("Hello World")
console.log(value_3)
//joining of values into string
let value_5 = arr.join()
console.log(value_5)
//to string
let value_6 = arr.toString()
console.log(value_6)
//pop method
let value_7 = arr.pop()
console.log(value_7)
//shift method 
let value_8 = arr.shift()
console.log(value_8)
//push
arr.push("mike")
console.log(arr)
//unshift 
arr.unshift('mark')
console.log(arr)
//concat
let value_9 = arr.concat(arr_1)
console.log(value_9)
//Splice
let value_10 = arr.splice(2,2)
console.log(value_10)
//lastindex
let value_11 = arr.lastIndexOf(8,0);
console.log(value_11)
//indexof
let value_12 = arr.indexOf((element) => element===23);
console.log(value_12)
//of()
let values_13 = Array.of("1","2","3");
console.log(values_13)
//slicing
let values_14 = arr.slice(2,4);
console.log(values_14)
//findidex
function Hello(n){
    return n>34
}
let values_15 = arr.findIndex(Hello);
console.log(values_15)
//find
let values_16 = arr_5.find((values)=>values.id===1);
console.log(values_16)
//includes
let values_17 = arr_1.includes(324)
console.log(values_17)
//reduceright
let values_18 = arr.reduceRight((accumulator,currentValue)=> accumulator+currentValue,0)
console.log(values_18)
//reduce
let values_19 = arr.reduce((accumulator,currentValue)=> accumulator+currentValue,0)
console.log(values_19)
//is array
let values_20 = Array.isArray(arr)
console.log(values_20)
//fiter
let value_21 = arr_5.filter((values)=>values.name === "muzammal")
console.log(value_21)
//map
function square(number){
    return number * number
}
let values_22 = arr.map(square)
console.log(values_22)
//for each
function each(number){
    console.log(number*number)
}
arr.forEach(each)
//some
function even(number){
    return number % 2 !==0
}
console.log(arr.some(even))
//every
function check(number){
    return number >23
}
console.log(arr.every(check))
//entries
const arr_6 = [1,2,3,4,78]
let key = arr_6.entries();
for (let entry of key){
    console.log(entry);
}
//keys
let key_1 = arr_6.keys();
for(let key of key_1){
    console.log(key)
}
//values
let key_2 = arr_6.values();
for(let key of key_2){
    console.log(key)
}
//from
let arr_7 = ("4534532434")
let values_24 = Array.from(arr_7)
console.log(values_24)
//constructor
let constr = arr.constructor;
console.log(constructor)
//
arr_1.copyWithin(0,4)
console.log(arr_1)
//toLocaleString()
const arr_66 = ["hello","world",2]
console.log(arr_66.toLocaleString())
//flat
let arr_34 = [324,54,[54,345,[45,345]]]
console.log(arr_34.flat(5))
//flatmap
const new_1 = [3,5,6,8,9]
let fm = new_1.flatMap((n)=>[n**3])
console.log(fm)




