// 1.
// let n1 = +prompt('enter first number') // почему тут показывается ошибка
// let n2 = +prompt('enter second number')
// let counter = 0
// if (n1 < n2){
//     while(n1 <= n2){
//         counter += n1
//         n1++
//     }
// }
// else if (n1 > n2){
//     while(n1 >= n2){
//         counter += n2
//         n2++
//     }
// }
// alert(counter)
2.;
// let n1 = +prompt('enter first number')
// let n2 = +prompt('enter second number') // menshe
// let k = n2 
// while(n1 % k == 0 && n2 % k == 0){
//     k--
//     alert(k)
// }
// const nod = (n, m) => {
//     if (m !== 0) {
//       const k = n % m;
//       return nod(m, k);
//     }
//     return n;
//   };
//   alert('Введите 2 число, что бы найти НОД')
//   let numb1 = prompt('Введите первое число');
//   let numb2 = prompt('Введите второе число');
//   alert('НОД чисел ' + numb1 + ' и ' + numb2 + ' будет: ' + nod(numb1, numb2));
// 5.
// let positive = 0
// let negative = 0
// let zero = 0
// let even = 0
// let odd = 0
// for (let i = 0; i < 5; i++ ){
//     let m = +prompt('введите число')
//     if  (m == 0){
//         zero++
//     }
//     else if (m % 2 == 0){
//         even++
//         if (m > 0){
//             positive++
//         }
//         else if (m < 0){
//             negative++
//         }
//     }
//     else if (m % 2 != 0){
//         odd++
//         if (m > 0){
//             positive++
//         }
//         else if (m < 0){
//             negative++
//         }
//     }
//     else{
//         alert('произошло что-то непридвиденное')
//     }
// }
// alert(
//     `Ты ввел 
//     количество положительных цифр = ${positive}
//     количество отрицательных цифр = ${negative}
//     количество нулей = ${zero} 
//     количество четных цифр = ${even} 
//     количество нечетных = ${odd}`
// )
// 6. 
do {
    var n1 = prompt('Enter number');
    var n2 = prompt('Enter number');
    var sign = prompt('Enter sign');
    alert(n1 + " " + sign + " " + n2 + " =" + summ2);
} while (n1 != null);
