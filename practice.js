// Задание 1: Приветствие
let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");

alert(`Привет, ${name}! Ваш возраст: ${age}`);
console.log(`Привет, ${name}! Ваш возраст: ${age}`);



// Задание 2: Проверка возраста
let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");

alert(`Привет, ${name}! Ваш возраст: ${age}`);
console.log(`Привет, ${name}! Ваш возраст: ${age}`);

if (age >= 18) {
    alert("Вы совершеннолетний");
    console.log("Вы совершеннолетний");
} else {
    alert("Вы несовершеннолетний");
    console.log("Вы несовершеннолетний");
}






// Задание 3: Угадай число
let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Угадайте число от 1 до 10:");

if (userGuess == randomNumber) {
    alert("Поздравляем! Вы угадали число!");
    console.log("Поздравляем! Вы угадали число!");
} else {
    if (userGuess < randomNumber) {
        alert("Не угадали. Ваше число меньше загаданного.");
        console.log("Не угадали. Ваше число меньше загаданного.");
    } else {
        alert("Не угадали. Ваше число больше загаданного.");
        console.log("Не угадали. Ваше число больше загаданного.");
    }
}






// Задание 4: Проверка пароля
const correctPassword = "12345";
let password = prompt("Введите пароль:");

if (password === correctPassword) {
    alert("Доступ разрешен");
    console.log("Доступ разрешен");
} else if (password === "" || password === null) {
    alert("Пароль не может быть пустым");
    console.log("Пароль не может быть пустым");
} else {
    alert("Доступ запрещен");
    console.log("Доступ запрещен");
}














// Задание 5: Простой калькулятор
let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");

if (operator === "+") {
    alert(`Результат: ${num1 + num2}`);
    console.log(`Результат: ${num1 + num2}`);
} else if (operator === "-") {
    alert(`Результат: ${num1 - num2}`);
    console.log(`Результат: ${num1 - num2}`);
} else if (operator === "*") {
    alert(`Результат: ${num1 * num2}`);
    console.log(`Результат: ${num1 * num2}`);
} else if (operator === "/") {
    if (num2 !== 0) {
        alert(`Результат: ${num1 / num2}`);
        console.log(`Результат: ${num1 / num2}`);
    } else {
        alert("Ошибка: деление на ноль невозможно");
        console.log("Ошибка: деление на ноль невозможно");
    }
} else {
    alert("Неверный оператор");
    console.log("Неверный оператор");
}
