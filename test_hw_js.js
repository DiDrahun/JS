//Создать переменную a:
let a; 
//Создать переменную b:
let b; 
//Присвоить a - число 50, b - число 20:
a=50; 
b=20;
/*Создать переменную c и присвоить ей сумму a и b, 
деленную на произведение a и b: */
let c=(a+b)/(a*b);
//Вывести c:
console.log(c);
//Вывести с, a и b в одну строку через запятую
console.log(c + ',' + a + ','+ b);
/* Вывести сумму a + b + с , разницу между a и b и 
остаток от деления a на b в одну строку, не используя других переменных 
в виде:
  "Сумма a, b и с == ... , Дельта a и b == ... , 
  Остаток от деления a на b == ... " : */
let sum=a + b + c;
let sub=a - b;
let remains=a % b;
console.log('Сумма a, b и c == ' + sum + ',' 
+ ' Дельта a и b == ' + sub + ',' 
+ ' Остаток от деления a на b == ' + remains + '.' );

/* Создать функцию, которая будет выводить утроенное значение остатка 
от деления произведения переменных "a" и "b" на их сумму. */
function multiplication (a, b){
let result = 3 * ((a * b) % (a + b));
return result; }
console.log (multiplication(a, b));
/* Создать функцию, которая будет получать на вход число и 
на выходе будет писать - делится ли оно на 5 или делится ли оно на 11
Если число не делится ни на 5, ни на 11 - вывести " ... - скучное число */
divf(12);
divf(25);
divf(121);
divf(55);
function divf(userNumber){
    if ( (userNumber % 5==0)){
        console.log (userNumber +' - this value divisible by 5')
    }
    else if ( (userNumber % 11==0)){
        console.log (userNumber +' - this value divisible by 11')
    }
    else if ( (userNumber % 5!=0) && (userNumber % 11!=0)){
        console.log (userNumber +' - this borring value')
    }
}