//РЕШЕНИЕ 1 **********************************************
  const palmTreen = (n = 1) => !Number(n) ? false : "p".repeat(n)

  console.log(palmTreen("sd"))
  console.log(palmTreen())
  console.log(palmTreen(9))


//РЕШЕНИЕ 2 ***********************************************

console.log([1, 4, 3, 0, 4, 5, 4, 6]
  .filter(el => el % 2 === 0)
  .reduce((sum, el) => sum+= Math.sqrt(el), 0)
  .toFixed(2)
)


//РЕШЕНИЕ 3 ***********************************************

  const change_register = str => typeof str === 'string' ? str.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ") : "enter string"


//РЕШЕНИЕ 4 ***********************************************

  let str = "каждый охотник желает знать"

  const change_register = str => 
    typeof str === 'string' ? 
    str.split(" ").map((el) => 
      el.split("").map((word, idx) => 
        idx % 2 === 0 ? word.toUpperCase() : word).join(""))
    .join(" ") :
    'enter string'

  console.log(change_register(str))


//РЕШЕНИЕ 6 ***********************************************

let str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь"

const change_register = (str) => typeof str === "string" 
  ? str.split("").map(el => el !== " " ? el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase() : el).join("")
  : 'enter string' 

console.log(change_register(str)) //кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ


//РЕШЕНИЕ 7 ***********************************************

//variant 1
const insensitive_search = (str1, str2) => typeof str1 === 'string' && typeof str2 === 'string' ?
  str1.search(new RegExp(str2, "ig")) > 0 ? "true" : "false"
  : "enter string"
varian 2
const insensitive_search = (str1, str2) => typeof str1 === 'string' && typeof str2 === 'string' ?
  str1.split(" ").some(el => el.toLowerCase() === str2.toLowerCase()) ? true : false
  : "enter string"

console.log(insensitive_search('Изучаю JavaScript', 'javascript'))
console.log(insensitive_search('Изучаю JavaScript', 'javascriptS'))


//РЕШЕНИЕ 8 ***********************************************

const str = "hEllo woRld";
 
 const initCap = (str) => typeof str === 'string'
  ? str.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join("")
  : "enter string"

console.log(initCap(str))


//РЕШЕНИЕ 9 ***********************************************

var str = "Каждый охотник желает знать"; 
var str1 = "скрипт";
var str2 = "знать";

String.prototype.endsWith = function (substring) {
  if (typeof substring !== 'string') {
    return "argumnet must be string"
  }

  return this.slice(-(substring.length)) === substring ? true : false
}

console.log(str.endsWith(str1))
console.log(str.endsWith(str2))


//РЕШЕНИЕ 10 ***********************************************
  //variant 1
  function multiplicationTable(row,col){
    const result = []

    for (let i = 1; i <= row; i += 1) {
      result.push([])

      for (let j = 1; j <= col; j += 1) {
        result[i-1].push(i*j)
      }
    }

    return result
  }

  //variant 1
  const multiplicationTable = (row, col) => [...Array(row)].map((el, i) =>[...Array(col)].map((el, j) => (i + 1) * (j + 1)))

  console.log(multiplicationTable(2,3));
  console.table(multiplicationTable(9,9));

