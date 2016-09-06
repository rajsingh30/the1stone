// var readline=require('readline');
// var r1=readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// })
function swap(){
var a= prompt("Enter the num1");
var b= prompt("Enter the num2");
temp=a;
a=b;
b=temp;
document.writeln('the first number is' +a+'Second element'+b);
}