// Функции
// 1 Function Declaration
// function greet(name) {
//     console.log('Привет - ', name)
// }
// Function Expression
// const greet2 = function (name) {
//     console.log('Привет2 - ', name)
// }
// greet('Лена')
// greet2('Оля')

// console.log(typeof greet)
// console.dir(greet) // Выводит структуру функции в консоли, где видно (в свойстве __proto__) что функция так же является объектом
// console.log(typeof greet2)

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function () { // Передача в качестве параметра анонимной функции
//     if (counter === 5) {clearInterval(interval)}
//     else {console.log(++counter)}
// }, 1000)

// 3 Стрелочные функции
// function greet(name) {
//     console.log('Привет - ', name)
// }
// Переписываем предыдущую функцию greet в виде стрелочной функции
// const arrow = (name,age) =>{
//     console.log('Привет - ', name,age)
// }
// arrow('Dmitry',45)

// Ещё более сокращённый вариант стрелочной функции
// const arrow2 = name => console.log('Привет - ', name) // Если один параметр, то скобки можно не ставить
// arrow2('Maksim')
//
// const pow = num =>{
//     return num**2
// }
// Более сокращённый вариант записи функции pow
// const pow2 = num => num**2
//
// console.log(pow(4))
// console.log(pow2(4))

// 4 Параметры по умолчанию
// const sum = (a,b = 1)=>a + b // Параметру b присваиваем значение по умолчанию 1
// console.log(sum(41))
//
// const sum2 = (a = 40,b = a*2) => a + b // Параметру b присваиваем значение по умолчанию, используя предыдущий параметр
// console.log(sum2()) //Вызов функции без параметров, используются параметры по умолчанию
//
// function sumAll(...args) {
//     console.log(args)
//     let result = 0
//     for(let num of args){
//         result +=num
//     }
//     return result
// }
//
// const res = sumAll(1,3,10,31)
// console.log('Result sumAll: ',res)

// 5 Замыкания
function createMember(lastName) {
    return function (firstName) {
        console.log(firstName + ' ' + lastName)
    }
}
const zatulenko = createMember('Затуленко')
zatulenko('Дима')
zatulenko('Марина')

