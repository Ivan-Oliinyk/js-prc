// function delete_characters(str, length) {
//   if (typeof str === 'string' && length > 0) {
//     return str.slice(0, length)
//   }

//   return false
// }

// console.log(delete_characters('Каждый охотник желает знать', 7));
// console.log(delete_characters('Каждый охотник желает знать', 0));
// console.log(delete_characters(2, 2));

// function insert_dash(str) {
//   if (typeof str === "string") {
//     return str.split(' ').join("-")
//   }

//   return 'str is not a string'
// }

// console.log(insert_dash("HTML JavaScript PHP"))
// console.log(insert_dash("HTML_JavaScript"))
// console.log(insert_dash(2))
// console.log(insert_dash())

// let str = "каждый охотник желает знать"

// const capitalize = str => typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : "enter string"

// console.log(capitalize(str))
// console.log(capitalize("asqw"))
// console.log(capitalize(""))

// const change_register = str => typeof str === 'string' ? str.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ") : "enter string"

// let str = "каждый охотник желает знать"

// const change_register = str => 
//   typeof str === 'string' ? 
//   str.split(" ").map((el) => 
//     el.split("").map((word, idx) => 
//       idx % 2 === 0 ? word.toUpperCase() : word).join(""))
//   .join(" ") :
//   'enter string'

// console.log(change_register(str))

// let str = "каждый охотник желает знать"

// const comparison = (str1, str2) => typeof str1 === "string" && typeof str2 === "string" ?
//   str1.toUpperCase() === str2.toUpperCase() ? true : false
//   : 'enter string'

// console.log(comparison('string', 'StRiNg'))
// console.log(comparison('ABCDe', 'AbcdW'))

//variant 1
// const insensitive_search = (str1, str2) => typeof str1 === 'string' && typeof str2 === 'string' ?
//   str1.search(new RegExp(str2, "ig")) > 0 ? "true" : "false"
//   : "enter string"
//varian 2
// const insensitive_search = (str1, str2) => typeof str1 === 'string' && typeof str2 === 'string' ?
//   str1.split(" ").some(el => el.toLowerCase() === str2.toLowerCase()) ? true : false
//   : "enter string"

// console.log(insensitive_search('Изучаю JavaScript', 'javascript'))
// console.log(insensitive_search('Изучаю JavaScript', 'javascriptS'))

// const repeatStr = (str, n = 1) => typeof str === 'string' && str.length > 0 && typeof n === 'number'
//   ? str.repeat(n)
//   : "enter valid value"

// console.log(repeatStr("Hello!"))
// console.log(repeatStr("Hello!", 5))
// console.log(repeatStr(""))
// console.log(repeatStr(21, 0))

// const pathname = str => typeof str === 'string'
//   ? str.slice(str.lastIndexOf('/') + 1)
//   : 'enter valid value'

// console.log(pathname("/home/user/dir/file.txt"))
// var str = "Каждый охотник желает знать"; 
// var str1 = "скрипт";
// var str2 = "знать";

// String.prototype.endsWith = function (substring) {
//   if (typeof substring !== 'string') {
//     return "argumnet must be string"
//   }

//   return this.slice(-(substring.length)) === substring ? true : false
// }

// console.log(str.endsWith(str1))
// console.log(str.endsWith(str2))


