
// var age = 13;

// console.log(age);


// var name = "Anya";

// console.log(name);


// var isStudent = true;

// console.log(isStudent);


// var myString = "Life is what happens when you're busy making other plans.";

// console.log(myString);


// var myNumber = 5;

// myNumber += 10;

// console.log(myNumber);

// var myNull = null;

// console.log(myNull);


// var userName = prompt("Введіть ваше ім'я:");

// alert("Привіт, " + userName + "!");


// var confirmation = confirm("Ви погоджуєтесь з цією дією?");

// if (confirmation) {
//   alert("Дякую за підтвердження!");
// } else {
//   alert("Дію відмінено!");
// }


// alert("Ця дія небезпечна!");

// var dangerConfirmation = confirm("Ви погоджуєтесь з цією дією?");

// if (dangerConfirmation) {
//   alert("Дякую за підтвердження!");
// } else {
//   alert("Дію відмінено!");
// }



// 1.

// let tCelsius = 30;

// let tFahrenheit = (tCelsius * 9/5) + 32;

// console.log("Температура у Фаренгейтах:", tFahrenheit);


// 2.

// let daysInOneMonths = 30;

// let hoursInOneMonths = daysInOneMonths * 24;

// let minutesInOneMonths = hoursInOneMonths * 60;

// console.log("К-ть годин у місяці:", hoursInOneMonths);

// console.log("К-ть хвилин в місяці:", minutesInOneMonths);

// 3.

// let levelOfHealth = 100;

// let levelOfEnergy = 100;

// levelOfHealth -= 45;

// levelOfEnergy -= 28;

// console.log("рівень здоров'я:", levelOfHealth);

// console.log("рівень енергії:", levelOfEnergy);

// 4.

// let purchaseAmount = 500;

// let discountPercentage = 10;

// let discountedAmount = purchaseAmount * (1 - discountPercentage/100);

// console.log("сума зі знижкою:", discountedAmount);

// 5.

// let floatNumber = 4.90;

// let roundNumber = Math.floor(floatNumber);

// console.log("округлене число:", roundNumber);

// 6.

// let stringNumber = "8.67";

// let decimalNumber = parseFloat(stringNumber);

// console.log("десяткове число:", decimalNumber);

// 7.

// stringIdk = 15;

// let idkNumber = parseInt(stringIdk);

// console.log("Ціле число:", idkNumber);

// let stringFromIdk = idkNumber.toString();

// console.log("Рядок зі значенням:", stringFromIdk);

// 8.

// let number = 16;

// let squareRoot = Math.sqrt(number);

// console.log("Корінь числа:", squareRoot);

// 9.

// let integerValue = 45; 
// let numberString = "123";

// let parsedInteger = parseInt(numberString);
// console.log("Ціле число після перетворення:", parsedInteger);

// let stringFromInteger = integerValue.toString();
// console.log("Рядок після перетворення:", stringFromInteger);

// 1.

// let result = 5 + 5 + '5';

// console.log(typeof result);

// console.log(typeof result);

// 2.

// let email = 'anetkor8@gmail.com';
// let hasAtSymbol = email.includes('@');
// let totalCharacters = email.length;

// console.log(`Емеіл мітить @ символ: ${hasAtSymbol}`);
// console.log(`Загальна к-ть символів в емейлі: ${totalCharacters}`);

// 3.

// let word1 = 'My';
// let word2 = 'name';
// let word3 = 'is';

// let fullName = `${word1} ${word2} ${word3} Viktor`;
// console.log(fullName);

// 4.

// let userName = 'Олександро';
// let payment = 300;

// alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);


// 1
// function checkFields() {
//     var field1Value = document.getElementId("field1").value;
//     var field2Value = document.getElementId("field2").value;

//     if (field1Value !== "" && field2Value !== "") {
//         alert("Обидва поля заповнені");
//     } else {
//         alert("Не всі поля заповнені");
//     }
// }

// 2

// function checkSum() {
//     var num1 = parseFloat(document.getElementById("num1").value);
//     var num2 = parseFloat(document.getElementById("num2").value);

//     var sum = num1 + num2;

//     if (sum > 10) {
//         alert("Сума більша за 10");
//     } else {
//         alert("Сума менша або дорівнює 10");
//     }
// }

// 3

// function checkText() {
//     var inputText = document.getElementById("inputText").value;
    
//     if (inputText.includes("JavaScript")) {
//         alert("Текст містить слово JavaScript");
//     } else {
//         alert("Текст не містить слово JavaScript");
//     }
// }


// 4

// function checkNumber() {
//     var inputValue = parseFloat(document.getElementById("inputNumber").value);
    
//     if (inputValue > 10 && inputValue < 20) {
//         alert("Число входить в діапазон від 10 до 20");
//     } else {
//         alert("Число не входить в діапазон від 10 до 20");
//     }
// }

// 5

// function validateForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     if (name.length < 3 || email.indexOf('@') === -1 || email.indexOf('.') === -1 || password.length < 6) {
//         alert("Дані введені неправильно");
//     } else {
//         window.location.href = "інша_сторінка.html";
//     }
// }



// const textInput = document.getElementById('textInput');
//     const changeButton = document.getElementById('changeBtn');

//     changeButton.addEventListener('click', () => {
//       const newText = textInput.value;
//       changeButton.textContent = newText;
//     });

//     const image = document.getElementById('image');
//   image.addEventListener('click', () => {
//     image.src = 'https://i.pinimg.com/736x/c2/9d/97/c29d9761e6e6dbc0b8d6ac0c34e76055.jpg';
//   });

//   const link = document.getElementById('link');
//     const linkedImage = document.getElementById('linkedImage');

//     link.href = 'https://p4.wallpaperbetter.com/wallpaper/924/442/536/car-wallpaper-preview.jpg';
//     linkedImage.alt = '';

//     const list = document.getElementById('list');
//     const firstListItem = list.querySelector('li:first-child');
//     firstListItem.textContent = 'Новий текст';




// 1

// let i = 1;

// while(i <=10){
//        console.log(i);
//       i++;
//    }


// 2 -

// 3
//  const number = 7;

// for (let i = 1; i <= 10; i++) {
//     const result = number * i;
//     console.log(`${number} * ${i} = ${result}`);
// }

// 4
//    let yasno = [1, 2, 3, 4, 5];
//    let index = 0;

//    while(index< yasno.length){
//     console.log(yasno[index]);
//     index++
//    }

// 5

//    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let number of numbers) {
//     if (number === 7) {
//         break;
//     }
//     console.log(number);
// }

// 6

// let n = 7;
// for (let i = 1; i < n; i++) {
//     console.log(i);
//     if (i >= n) {
//         break;
//     }
// }

// 7

// let cifra = 1;
// while (cifra <= 20) {
//     if (cifra % 3 === 0) {
//         cifra++;
//         continue;
//     }
//     console.log(cifra);
//     cifra++;
// }

// 1.

// let chisla = [1, 2, 3];

// chisla[1] = 10;

// console.log(chisla);

// 2.

// let geniy = ["hello", "apple", "september"];

// geniy.push("bye");

// console.log(geniy);

// 3 -

// 4.

// let cifra = [1, 2, 3, 4, 5];

// for(let i = 0;i < cifra.length; i++){
//     console.log(cifra[i]);
// }

// 5.

// let ryadki = ["italy", "shop", "brain", "windows", "booking"];

// for(let i = 0; i < ryadki.length; i++){
//     if(ryadki[i].length > 5){
//         console.log(ryadki[i]);
//     }
// }

// 6

// let nazva = [1, 15, 80, 44, 32, 60, 90, 76, 2, 73];

// let max = nazva[0];

// for(let i = 1; i < nazva.length; i++){
//     if(nazva[i] > max){
//         max = nazva[i];
//     }
// }

// console.log("Макс. значення в масиві: " + max);

// 7

// let chto = [5, 88, 9, 45, 66, 32, 78, 98, 7, 40];

// for(let i = 0; i < chto.length; i++){
//     if(chto[i] % 2 === 0){
//         console.log(chto[i])
            
//         }
//     }









document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("beverage");

    const messageBlock = document.getElementById("message-block");

    const message = document.getElementById("message");

    select.addEventListener("change", function () {

        const selectedOption = select.options[select.selectedIndex].value;

        message.textContent = `Ви вибрали: ${selectedOption}`;
    });
});


document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("weekday-input");

    const button = document.getElementById("check-button");

    const resultMessage = document.getElementById("result-message");

    button.addEventListener("click", function () {

        const value = input.value.trim().toLowerCase();
        
        if (["понеділок", "вівторок", "середа", "четвер", "п'ятниця"].includes(value)) {
            resultMessage.textContent = "Це робочий день.";
            resultMessage.style.display = "block";
        } else if (["субота", "неділя"].includes(value)) {
            resultMessage.textContent = "Це вихідний день.";
            resultMessage.style.display = "block";
        } else {
            resultMessage.textContent = "Це не день тижня.";
            resultMessage.style.display = "block";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("month-input");
    const button = document.getElementById("check-button");
    const resultMessage = document.getElementById("result-message");

    button.addEventListener("click", function () {
        const monthNumber = parseInt(input.value);

        if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
            resultMessage.textContent = "Неправильний номер місяця. Введіть число від 1 до 12.";
        } else {
            let season = "";
            switch (monthNumber) {
                case 12:
                case 1:
                case 2:
                    season = "Зима";
                    break;
                case 3:
                case 4:
                case 5:
                    season = "Весна";
                    break;
                case 6:
                case 7:
                case 8:
                    season = "Літо";
                    break;
                case 9:
                case 10:
                case 11:
                    season = "Осінь";
                    break;
            }
            resultMessage.textContent = `Даний місяць належить до пори року: ${season}`;
        }

        resultMessage.style.display = "block";
    });
});



document.addEventListener("DOMContentLoaded", function () {
    
    const input = document.getElementById("month-input");

    const button = document.getElementById("check-button");

    const resultMessage = document.getElementById("result-message");


    button.addEventListener("click", function () {
        const monthNumber = parseInt(input.value);

        if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
            resultMessage.textContent = "некоректний номер місяця. Введіть число від 1 до 12.";
        } else {
            const daysInMonth = new Date(new Date().getFullYear(), monthNumber, 0).getDate();
            resultMessage.textContent = ` В цьому місяці ${daysInMonth} днів(день).`;
        }

        resultMessage.style.display = "block";
    });
});



document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("color-input");

    const button = document.getElementById("check-button");

    const resultMessage = document.getElementById("result-message");


    button.addEventListener("click", function () {
        const color = input.value.trim().toLowerCase();
        let action = "";

        switch (color) {
            case "червоний":
                action = "стоп";
                break;
            case "зелений":
                action = "йти";
                break;
            case "жовтий":
                action = "чекати";
                break;
            default:
                action = "невідомий колір";
                break;
        }

        resultMessage.textContent = `Дія для кольору "${color}" - ${action}.`;
        resultMessage.style.display = "block";
    });
 });



document.addEventListener("DOMContentLoaded", function () {

    const num1 = document.getElementById("num1");

    const num2 = document.getElementById("num2");

    const operation = document.getElementById("operation");

    const button = document.getElementById("calculate-button");

    const resultMessage = document.getElementById("result-message");


    button.addEventListener("click", function () {
        const number1 = parseFloat(num1.value);
        const number2 = parseFloat(num2.value);
        const selectedOperation = operation.value;
        let result = 0;

        if (isNaN(number1) || isNaN(number2)) {
            resultMessage.textContent = "Будь ласка, введіть обидва числа.";
        } else {
            switch (selectedOperation) {
                case "+":
                    result = number1 + number2;
                    break;
                case "-":
                    result = number1 - number2;
                    break;
                case "*":
                    result = number1 * number2;
                    break;
                case "/":
                    if (number2 === 0) {
                        resultMessage.textContent = "Увага! На нуль ділити не можна";
                        resultMessage.style.display = "block";
                        return;
                    }
                    result = number1 / number2;
                    break;
                default:
                    resultMessage.textContent = "Оберіть правильну операцію (+, -, *, /).";
                    resultMessage.style.display = "block";
                    return;
            }
            resultMessage.textContent = `Результат: ${result}`;
        }

        resultMessage.style.display = "block";
    });
});








