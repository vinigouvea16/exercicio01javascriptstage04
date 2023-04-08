let name = prompt("Hello, stranger, What's your name?")
alert(`Alright, ${name}. Shall we play with number?
I need you to type 2 numbers for me, can you do it?`)

let n1 = prompt("Type the first number:")
let n2 = prompt("Ok, now the second number:")
alert(`Your numbers were ${n1} and ${n2}
I'll show you the following math operations:
> sum, 
> subtraction, 
> mulitiplication, 
> division 
> and the remainder`)

let sum=Number(n1)+Number(n2)
alert(`The sum of the two typed numbers, is: ${sum}`)

let sub=Number(n1)-Number(n2)
alert(`but the subtraction of the two typed numbers, is: ${sub}`)

let times=Number(n1)*Number(n2)
alert(`Now, ${n1} times ${n2} equals ${times}`)

let div=(Number(n1)/Number(n2)).toFixed(2)
alert(`and, ${n1} divided by ${n2} is: ${div}`)

let rem=Number(n1)%Number(n2)
alert(`at last, the reminder is: ${rem}`)


let even = sum%2
console.log(even)
if(even===0){
  alert("Your sum is even")
} else {
  alert("Your sum is odd")
}

let number1 = Number(n1)
let number2 = Number(n2)

if(Number(n1) == Number(n2)){
  alert(`Oh, out of creativity? 
  Looks like the numbers typed are equal, lol`)
} // else { alert(`The numbers are different from each other`)}

/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

*/
