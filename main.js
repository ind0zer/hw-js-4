const field1 = prompt("Введіть значення для першого поля:");
const field2 = prompt("Введіть значення для другого поля:");

if (field1 && field2) {
  console.log("Обидва поля заповнені")
} else {
  console.log("Не всі поля заповнені");
}

// 2

let number1 = 8;
const number2 = 9;

if (number1 + number2 > 10) {
  alert("Сума більша за 10");
} else {
  alert("Сума менша або дорівнює 10");
}

// 3

const text1 = prompt("Введіть текст: ")

if(text1 === "JavaScript") {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

// 4

const text2 = prompt("Введіть число: ");

if (text2 >= 10 && text2 <= 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

// 5

const name = prompt("Введіть ім`я");
const email = prompt("Введіть пошту");
const password = prompt("Введіть пароль");

if (name.length >= 3 && email.includes("@") && password.length >= 6) {
  window.location.href = "https://edu.goiteens.com/";
} else {
  alert("Помилка!");
}

































// // логічне ТА (operator &&) запинается; вертае те на чом заткнулось чи осталий operand;
// // тобто усі умови мають бути true, щоб виконався код

// console.log(10 && 3 && "11"); // буде рядок
// console.log(10 && 0 && "11"); // буде фолс
// console.log("false" && "0" && " "); // буде порожний рядок

// // логічне або (оператор ) запинается на правді, вертає те на чому запнулось чи останній оперант
// // або () шукае перше True або останій False (якщо true немає)

// console.log(10 || 0 || "11"); // вернуло перше TRUE
// console.log(false || 5 || null || 0); // вЕРНУЛО 5

// console.log(1 || 4 || 88 && "1488");
// console.log(9 && 4 || 5 || 8);

// // логічне НЕ (operapot !) робить інверсію не правди в неправду а також навпакі

// console.log(!0); // буде True
// console.log(!1); // буде False

// //Напиши скрипт який провіряє
// //вхождження числа * в відрізок x1 та x2.

// const number1 = 65;
// const number2 = 5;
// const aswer = 100;
// console.log(number1 > number && number1 < aswer);