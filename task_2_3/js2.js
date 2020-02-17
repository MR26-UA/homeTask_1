/* ДЗ_2 Циклы и функции*/


// var str = 'adfsdfdsaffasfaaaaasfsfasfdsf';
// var i = 0;
// var aCount = 0;

// while (i <= str.length) {
//     if (str[i] === 'a'){
//         aCount++;
//     }
//     i = i + 1;
// }
// console.log(aCount);


//var str = 'adfsdfdsaffasfaaaaasfsfasfdsf';  /* Не могу понять почему результат = 30 , а не 9 */
// var i = 0;
// var aCount = 0;

// do {
//     if(str[i] === 'a'); {
//     aCount = aCount +1;
//     }
// i = i +1;
// }
//     while ( i <= str.length) { 
// }
// console.log(i);



// let str = 'adfsdfdsaffasfaaaaasfsfasfdsf';
// let aCount = 0;

//   for ( let i = 0; i < str.length; i++ ) {
//       if (str[i] === 'a') {
//           aCount++;
//       }
//   }
//   console.log(aCount);



// let str = 'adfsdfdsaffasfaaaaasfsfasfdsf';  /*Если в последней строке удалить строку и оставить только букву,то покажет букву.Если нет -строку.*/
// let i = 0;
// let aCount = 0;

// function search(i = 'a') {
//     for (let i = 0; i <= str.lenght; i++) {
//         if (str[i] === 'a') {
//             aCount++;
//         }
//     }
//     return console.log (i);
// }
// result = search ( 'adfsdfdsaffasfaaaaasfsfasfdsf','a')


//ДЗ_3 на object
/* Задача_1*/

// var user = {
//     name: 'Dima',
//     age: 25,
//     eyesColor: 'green',
//     isAdmin: false,
//     role: 2
// };

// function copy(object) {
//  let copy = {};
//  for ( var key in user) {
//      copy[key] = object [key];
//     }

//  return copy;
// }

// var newUser = copy(user);
// console.log(newUser);

/* Задача_2 */

// var user1 = {
//     name: 'Masha',
//     age: 27,
//     eyesColor: 'brown',
//     height: 160,
// }
// var user2 = {
//     name: 'Masha',
//     age: 27,
//     eyesColor: 'brown',
//     height: 160,
// }
// function isEqual(user1, user2) {
//     if (user1 === user2) {
//         return (true);
//     }
//     else  {
//         return (false);
//     }
// }
//     var equal = isEqual(user1, user2);
//     console.log(equal);




    // function isEqual(user1, user2) {   /*другой вариант к задаче_2 */
//     if (user1 === user2) {
//         return true;
//     }
//     // else {
//     //     return false;
//     // }
    
//     if (user1 !== user2) { 
//     }




/* Задача_3 */


var obj = {
    name: 'Dima',
    age: 25,
    eyesColor: 'green',
    isAdmin: false,
    role: 2
};

function copyWithModify(name, age, eyesColor) {
    obj.name = 'Max',
    obj.age = 20,
    obj.eyesColor = 'darkblue'
}
 copyWithModify('Max', 20, 'darkblue');
 console.log (copyWithModify);