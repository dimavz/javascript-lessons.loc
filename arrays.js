// Часть 1
// const cars = ['Мазда', 'Форд', 'Мерседес', 'Тойота'] // Можем хранить строки
// // const fib = [1, 1, 2, 3, 5, 8, 13, 21] // Можем хранить числа
// // const mix = ['Мазда', 5, {'name': 'Dmitry'}] // Можем хранить любые данные и структуры данных
// console.log(cars)
// // console.log(fib)
// // console.log(mix)
// Часть 2
//
// cars[0] = 'Порше' // Назначаем элементу массива с индексом 0 новое значение
// console.log(cars)
//
// cars[cars.length] = 'Субару' // Добавляем а конец массива новое значение.
// //Это старый способ, которым редко пользуются
// console.log(cars)
// //Более современный способ добавления элемента в массив
// cars.push('Лексус')
// console.log(cars)
// // Добавление элемента в начало массива
// cars.unshift('Рено')
// console.log(cars)
//
// // Удаление элемента из начала массива
// const startEl = cars.shift() // Присваиваем удаляемый первый элемент массива
// console.log(startEl)
// console.log(cars)
//
// // Удаление элемента из конца массива
// const endEl =cars.pop() // Присваиваем удаляемый последний элемент массива
// console.log(endEl)
// console.log(cars)
//
// // Сортируем массив в обратном порядке
// cars.reverse()
// console.log(cars)

// Часть 3
// Задача 1
// const text = 'Привет, Мир'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)
//
// let reverseText2 = text.split('') //Создаём из строки массив по разделителю
// console.log(reverseText2)
// reverseText2.reverse()
// console.log(reverseText2)
// const newStr = reverseText2.join('')
// console.log(newStr)

// Часть 4
// const cars = ['Мазда', 'Форд', 'Мерседес', 'Тойота']
// console.log(cars)
// const index = cars.indexOf('Мерседес') // Возвращает индекс элемента, который мы ищем или -1 в случае отсутствия элемента
// cars[index] = 'Рено' // Присваиваем новое значение элементу со значением Мерседес
// console.log(cars)
// indexOf хорошо работает с примитивными типами данных, такими как строчки, числа,
// но при работе с объектами он не поможет
// в этом случае лучше использовать метод findIndex
// const people = [
//     {name: 'Dmitry', age: 45}, // Объект как элемент массива
//     {name: 'Tanya', age: 40},
//     {name: 'Sveta', age: 35},
// ]
// const indx = people.findIndex(function (person) {
//     return person.age === 40
// })
// console.log('Индекс элемента',indx)
// console.log(people[indx])
// Либо альтернативный вариант
// const person = people.find(function (person) {
//     return person.age === 40
// })
// console.log(person)
// Альтернативный способ поиска в массиве объектов
// let findedPerson = null
// for (const person of people){
//     // console.log(person)
//     if(person.age === 45){
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// Более компактный способ поиска в массиве объектов через стрелочную функцию
// const person = people.find(person => person.age === 40)
// console.log(person)

// Часть 5
// const cars = ['Мазда', 'Форд', 'Мерседес', 'Тойота']
// const res = cars.includes('Форд') // Выясняем существует ли в массиве искомый элемент
// console.log(res)

// Часть 6. Изменение элементов массива
// const cars = ['Мазда', 'Форд', 'Мерседес', 'Тойота']
// //Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
// const upperCaseCars = cars.map(car => car.toUpperCase()) // Вызываем стрелочную функцию
// console.log('Исходный массив', cars)
// console.log('Преобразованный массив', upperCaseCars)
// Часть 6.1
// const fib = [1, 1, 2, 3, 5, 8, 13, 21] // Массив чисел Фибоначчи
// const pow = num => num ** 2 // ссылочная функция возведения значения в квадрат
// const sqrt = num =>Math.sqrt(num)
// const fib2Pow = fib.map(pow)
// const pow2Fib = fib2Pow.map(sqrt)
// const pow2FibNew = fib.map(pow).map(sqrt) // так как это массив, то мы можем применять к нему методы последовательно
// console.log('Исходный массив чисел Фиббоначи',fib)
// console.log('Преобразованный в квадрат массив чисел Фиббоначи',fib2Pow)
// console.log('Обратное преобразование массива квадрата чисел Фиббоначи в массив чисел Фиббоначи', pow2Fib)
// console.log('Более изящное преобразование массива pow2FibNew', pow2FibNew)

// // Часть 7. Фильтрпация массива
// const fib = [1, 1, 2, 3, 5, 8, 13, 21] // Массив чисел Фибоначчи
// const pow = num => num ** 2 // ссылочная функция возведения значения в квадрат
// const fib2Pow = fib.map(pow)
// // Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// const newFibFilter = fib2Pow.filter(num => num > 20)
// console.log(fib)
// console.log(fib2Pow)
// console.log(newFibFilter)

// Часть 8. Объединение массива в одно значение
const people = [
    {name: 'Dmitry', age: 45, solary: 4200},
    {name: 'Tanya', age: 40, solary: 3500},
    {name: 'Sveta', age: 35, solary: 1700},
]
// Часть 8. задача Подсчитать общуу зарплату у людей у которых зарплата превышает 2000
//Метод reduce() применяет функцию callback к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
//Синтаксис array.reduce(callback[, initialValue])
//Параметры:
//callback
// Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:
// accumulator
// Аккумулятор, аккумулирующий значение, которое возвращает функция callback после посещения очередного элемента, либо значение initialValue, если оно предоставлено (смотрите пояснения ниже).
// currentValue
// Текущий обрабатываемый элемент массива.
// index Необязательный
// Индекс текущего обрабатываемого элемента массива.
// array Необязательный
// Массив, для которого была вызвана функция reduce.
// initialValue Необязательный
// Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.
const callback = (accumulator, person) => {
    if (person.solary > 2000) {
        accumulator += person.solary;
    }

    return accumulator
}
const allSolary = people.reduce(callback, 0)
console.log(allSolary)

// Более изящный способ предыдущего кода
const reducer = (accumulator, person) => accumulator += person.solary
const solary = (person) => person.solary > 2000
const allSolary2 = people.filter(solary).reduce(reducer, 0)
console.log(allSolary2)