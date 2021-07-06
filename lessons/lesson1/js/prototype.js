const person = {
    name: 'Мaxim',
    age:25,
    greet: function (){
        console.log("Greet")
    }
}

// В консоли набираем person и сморим результат
// Объект Object в JS является корневым и другие объекты могут от него наследоваться

// Мы можем переписать объект Person немного иначе

const person2 = new Object({
    name: 'Мaxim',
    age:25,
    greet: function (){
        console.log("Greet",this.name)
    }
})

// Добавляем в прототип класса Object функцию sayHelloy
Object.prototype.sayHelloy = function (){
    console.log('Hello!')
}
// Теперь наш объект person2 может воспользоваться этой функцией

// Создаём объект Lena наследуясь от объекта Person2, который унаследован от корневого объекта Object
const lena = Object.create(person2)

// Переопределяем свойство name объекта Lena
lena.name = 'Лена'

//Всё в JS является объектами

const str = 'I am string'

// Если в консоли ввести str и добавить точку (str.), то мы увидим какие методы и свойства есть у str
// а это означает, что str так же является объектом
// Теперь мы даже можем у str вызвать метод sayHello и он отработает.

// Перепишем наш объект str немного по другому

const str2 = new String('I am string')

// Теперь мы можем у str2 так же вызвать метод sayHelloy
// Если мы заглянем в прототип объекта str2 (__proto__:), то увидим наш класс String
// Если мы заглянем в прототип класса String (__proto__:), то увидим наш класс Object
// Это ещё раз доказывает что все стандартные объекты в JS наследуются от класса Object