//console.log(1); // console.log() - Это способ вывода информации в консоле браузера для разработчика

//console.log('Said'); //строковый тип данных
//console.log(6.8); //числовой тип данных
//console.log(true); //логический тип данных true - истина
//console.log(false); //логический тип данных false - false


// var Name = 'Said';
// console.log(Name);


// var age = 14;
// console.log(age);


// + является оператор склеивания (конкатенация)


// console.log('Я ' + Name + ' мне ' + age + ' лет ');


// var allInfo = 'Я ' + Name + ' мне ' + age + ' лет ';

// console.log(allInfo);

// + перед prompt() - преобразует нашу переменную в числовой тип данных
// prompt() - показывает сообщение и запрашивет ввод текста от пользователя
// var str = +prompt('Введите любое число');

//alert(str); //выводит значение нашей переменной в модальном окне

// console.log("6 + 3 = " + (6 + 3));
// console.log("6 - 3 = " + (6 - 3));
// console.log("6 / 3 = " + 6 / 3);
// console.log("7 % 3 = " + 7 % 3);


var Name = prompt( 'Введите своё имя');
console.log( 'Меня зовут ' + Name);

var Age = prompt('Сколько вам лет ?');
console.log('Мне ' + Age);

var plus = prompt (' Сколько будет 9 + 11 = ?');
console.log('9 + 11 = 20 ' + " Ваш ответ " + plus);

var minus = prompt ( ' Сколько будет 25 - 5 = ? ');
console.log('25 - 5 = 20 ' + ' Ваш ответ ' + minus);

var division = prompt (' Сколько будет 200 : 10 = ? ');
console.log('200 : 10 = 20 ' + ' Ваш ответ ' + division);

var multiplication = prompt ('Сколько будет 5 * 4 = ?')
console.log('5 * 4 = 20 ' + ' Ваш ответ ' + multiplication);
