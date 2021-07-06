// Объяснение что такое контекст в JS

function hello() {
    console.log('Hello!', this);
}

const person = {
    name: 'Мaxim',
    age: 25,
    sayHello: hello, // Присваиваем функции значение функции hello, которую мы уже создали ранее
    // Функции sayHelloWindow мы присваиваем значение функции hello, которой через метод bind передаём контент объекта window
    // так как всё в JS является объектом, (в том числе и функция) то у функции тоже есть свои методы и свойства, которые можно вызывать через точку
    sayHelloWindow: hello.bind(window),
    sayHelloDocument: hello.bind(document),
    logInfo: function () {
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
    },
    logInfo2: function (job, phone) {
        console.group(`Info about: ${this.name} `)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    },

}

// Теперь вызовем в консоли наш объект person и его методы sayHello, sayHelloWindow и sayHelloDocument
// person.sayHello(), person.sayHelloWindow() и  person.sayHelloDocument() посмотрим на тот контекст который вызывается

// Создадим новый объект lena
const lena = {name: 'Лена', age: 25}
// Передадим контент нашего объекта lena (свяжем контент) в функцию logInfo объекта person
const newFunction = person.logInfo.bind(lena)
// Вызовем нашу новую функцию
newFunction()
// Или так
person.logInfo.bind(lena)() // и посмотрим в консоль
// и посмотрим в консоль
person.logInfo2.bind(lena)('Программист', '+375 29 45-98-24')
// или
const fnLenaInfoLog = person.logInfo2.bind(lena)
fnLenaInfoLog('Программист2', '+375 29 45-98-213')
// или
const fnLenaInfoLog2 = person.logInfo2.bind(lena, 'Программист3', '+375 29 45-98-18')
fnLenaInfoLog2()

// Так же в JS есть метод call. У него есть небольшое отличие от метода bind
// Он сразу передаёт контекст и вызывает функцию, а не возвращает функцию
person.logInfo2.call(lena, 'Программист4', '+375 29 45-98-33')
//Так же есть метод apply
// Его отличие от метода call заключается в том, что мы передаём параметры в виде массива, а не списка
person.logInfo2.apply(lena, ['Программист5', '+375 29 45-98-11'])

/// ============================== Практика

const numbers = [1, 2, 3, 4, 5]

function multBy(arr, n) {
    return arr.map(function (i) {
        return i * n
    })
}

console.log(multBy(numbers,3))

//Используем тоже самое но задействуя прототип
Array.prototype.multBy = function (n){
    return this.map(function (i) {
        return i * n
    })
}

console.log(numbers.multBy(5))