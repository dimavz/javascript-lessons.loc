// Работа со строкой
const name = 'Dmitry'
console.log('toLowerCase', name.toLowerCase()) // Переводит в нижний регистр
console.log('toUpperCase',name.toUpperCase()) // Переводит в верхний регистр
console.log('startsWith',name.startsWith('Dmi')) // Проверяет начинается ли строка с искомой подстроки
console.log('endsWith',name.endsWith('ry')) // Проверяет заканчивается ли строка с искомой подстроки
console.log('Повторение строки',name.repeat(3)) // Повторение строки заданное колич. раз
console.log('indexOf',name.indexOf('t')) // Выводит индекс символа в строке или -1 если такой символ не найден

const password = '   password    '
console.log('trim',password.trim()) // Обрезка пробелов с обеих сторон
console.log('trimLeft',password.trimLeft()) // Обрезка пробелов с левой стороны
console.log('trimRight',password.trimRight()) // Обрезка пробелов с правой стороны

function logPerson(s,name, age) {
    console.log(s,name,age)
    // return 'Info about person'
    return `${s[0]}${name}${s[1]}${age}`
}

const personName = 'Dmitry'
const personAge = 45

const output = logPerson`Имя: ${personName}, возраст: ${personAge}`
console.log(output)