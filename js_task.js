// var MIN_AGE = 18;
// var age = 20;
// let num = "18";
// alert(typeof num);
// alert (age)
// if (age >= MIN_AGE) {
//     console.log("Доступ разрешен")
// }
// if (age< MIN_AGE) {
//     console.log("Доступ запрещен")
// }
// if ( age >= num ) {
//     console.log("Доступ разрешен")   
// }
// if ( age < num ) {
//     alert("Доступ запрещен")   
// }
// if ( age = " ") {
//     alert("Вы ввели неккоректную строку")
// }
// else {
//     alert("Данный формат данных не поддерживается")
// }

// 

// var number = 44;
// let number1 = 60;
// let number2 = 20;
// if (number >= 60) {
//     console.log("You are too old!")
// }
// if (number <= 60) {
//     console.log("You are young!")
// }

// 

// var MAX_AGE = 55;
// let num = 77;
// let num2 = 55;
// var successMessage = 'true';
// var failedMessage = 'false';
// var message = MAX_AGE < num
// ? successMessage : failedMessage ;
// console.log(message);

// 

// const number = +prompt('Введите число между 0 и 23', '');
// switch (number) {
//     case 0:
//     case 1:
//     case 2:
//       alert("Сутки только начались");
//     break;

//     case 2:
//     case 3:
//     case 4:
//     case 5:
//       alert("Еще рано, можно спать");
//     break;
    
//     case 5:
//     case 6:
//     case 7:
//       alert("Мам, можно еще чуть-чуть по спать");
//     break;

//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         alert("Собираемся в школу");
//     break;

//     case 10:
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//         alert("Уроки в школе");
//     break;

//     case 14:
//     case 15:
//     case 16:
//     case 17:
//         alert("Продленка")
//     break;

//     case 17:
//     case 18:
//     case 19:
//       alert("Дорога домой");
//     break;

//     case 19:
//     case 20:
//     case 21:
//     case 22:
//     case 23:
//         alert("Урррааа :)");
//     break;
// }

const number = +prompt('Введите число между 0 и 23', '');
if (number <=2) {
alert("Сутки только начались");
}
if (number ===2 || number ===3 || number ===4 || number ===5) {
    alert("Ещё рано, можно спать");
}
if (number ===5 || number ===6 || number ===7) {
    alert("Мам, можно еще чуть-чуть по спать")
}
if (number ===7 || number ===8 || number ===9 || number ===10) {
    alert("Собираемся в школу")
}
if (number ===10 || number ===11 || number ===12 || number ===13 || number===14) {
    alert("Уроки в школе")
}
if (number ===14 || number ===15 || number ===16 || number ===17) {
    alert("Продленка")
}
if (number ===17 || number ===18 || number ===19) {
    alert("Дорога домой")
}
if (number ===19 || number ===20 || number ===21 || number ===22 || number===23) {
    alert("Урррааа :)")
}
else {
    alert("Вы ввели больше,чем мы просили.")
}


