
//#1
//Создать три const - строки, содержащие символы клавиатуры верхнего, среднего и нижнего ряда английского языка. 

const keyboardTop = 'qwertyuiop';
const keyboardMiddle = 'asdfghjkl';
const keyboardBottom = 'zxcvbnm';
//#1

//#2
//Создать три const переменные с числом, содержащим длинну строк, полученных ранее.
const buttonT = keyboardTop.length;
const buttonM = keyboardMiddle.length;
const buttonB = keyboardBottom.length;
//#2

//#3
//Используя charAt, для каждой строки получить первый и последний символ для каждой из трех строк, используйте имеющиеся константы.
const kE = (keyboardTop.charAt(0));
const kE2 = (keyboardTop.charAt(9));

const kM =(keyboardMiddle.charAt(0));
const kM2 = (keyboardMiddle.charAt(8));
// alert(keyboardMiddle.charAt(0),keyboardMiddle.charAt(8));

const kB = (keyboardBottom.charAt(0));
const kB2 = (keyboardBottom.charAt(6));
// alert(keyboardBottom.charAt(0),keyboardBottom.charAt(6));
//#3


//#4 Сделайте поиск позиции для символов [ и ] с помощью indexOf и сохраните результат в переменных.
const postElement = keyboardBottom.indexOf('b');
//console.log(postElement, 4);
//document.querySelector('.out').innerHTML=
// console.log(keyboardBottom.indexOf('b'));
//#4


//#5Используя многострочную шаблонную строку, вывести названия всех переменных и полученные значения за один console.log.
const allTask = 
`${keyboardTop}, 
${keyboardMiddle},
${keyboardBottom},

${buttonT},
${buttonM},
${buttonB},

${kE},${kE2},
${kM},${kM2},
${kB},${kB2},

${postElement}`;

console.log(allTask);
//#5

document.getElementById('taskAll').innerHTML = (allTask);