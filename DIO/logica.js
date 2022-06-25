const prompt = require("prompt-sync")();
// media da nota

let nota1 = parseInt(prompt("Digite a nota 1: "));
let nota2 = parseInt(prompt("Digite a nota 2: "));

let resultado = (nota1 + nota2) / 2;

console.log("A media é: " + resultado);

// Operadores no javaScript e suas funções
// https://www.w3schools.com/js/js_operators.asp
/*+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement 

Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y

Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator

Operator	Description
&&	logical and
||	logical or
!	logical not */




