//alert('hello!'); вікно повідомлення
//console.log('hello!'); f12-console
//document.write('hello!');


/*var sum =1995 + 3 + 16;
document.write(sum);

var year =1995;
var month = 3;
var day = 16;
var sum = year + month + day;
document.write(sum);

var year = 1995;
var month = 3;
var day = 16;
var sum = year + month + day;
var text = 'Your magic number:';
var result = text + sum;
document.write(result);

var year = Number(prompt('input your year'));
var month = Number(prompt('month'));
var day = Number(prompt('day'));
var sum = add(year, month, day);
var text = 'Your magic number:';
var result = text + sum;
document.write(result);
*/
/*
function add(a, b, z) {
    var result = a + b + z;
    return result ;
}
*/

//function telAge(age){
//    if (age<18) {
//        return 'Your are kid'
//    } else if(age>80) {
//        return 'Your are old';
//    } else{
//        return 'your are adult'
//    }
//}
//var age = Number(prompt('tell your age'));
//var result = telAge(age);
//document.write(result);

//var result = Math.sqrt(25);
//document.write(result);//

/*
var a = Number(prompt('Input first number'));
var b = Number(prompt('Input second number'));
var c = Number(prompt('Input third number'));
var disc = b * b - 4 * a * c;
var x1 = (- b - disc) / 2 * a;
var x2 = (-b + disc) / 2 * a 
var result = x1;
document.write(result);
*/
/*
function add(a, b, c){
    var result = (-b + b - 4 * a * c) / 2 * a
    return result
}
*/

/*
var a = Number(prompt('Input first number'));
var b = Number(prompt('Input second number'));
var c = Number(prompt('Input third number'));
var x1 = - b + (Math.sqrt((b * b) - (4 * a * c))) / 2 * a;
var x2 = - b - (Math.sqrt((b * b) - (4 * a * c))) / 2 * a
var result = x1;
var results = x2;
document.write(result);
document.write(results);
*/


//рішення квадратного рівняння
var a = Number(prompt('Input first number'));
var b = Number(prompt('Input second number'));
var c = Number(prompt('Input third number'));
var x1 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
var x2 = (-b + Math.sqrt(b * b - 4 * a * c))/ (2 * a);
var textx1 = 'Your x1:';
var textx2 = '___Your x2:';
var result = textx1 + x1;
var results = textx2 + x2;
document.write(result);
document.write(results);
