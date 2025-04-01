{
let x = 10;

console.log(x); //10
}

{
let a = 20;
let b = 5;

//soma
console.log(a + b); //25

//subtração
console.log(a - b); //15

//multiplicacao
console.log(a * b); //100

//divisão
console.log(a / b) //4

//resto da divisão
console.log(a % b); //0
}
{
let num = -15;

console.log(-num); //15
}
{
 let count = 5;

//incrementa um número
console.log(++count); //6

//decrementa o número
console.log(--count); //5   
}
{
 let x = 10;

console.log(x); //10
x += 5;

console.log(x); //15
x -= 3;

console.log(x); //12
x *= 2;

console.log(x); //24
x /= 4;

console.log(x); //6
x %= 3;

console.log(x); //0   
}
{
  let p = true;
let q = false;

// && = E
console.log(p && p); //true
console.log(q && q); //false
console.log(p && q); //false

// || = Ou
console.log(p || p); //true
console.log(q || q); //false
console.log(p || q); //true

// ! = Não
console.log(!p); //false
console.log(!q); //true  
}
{
console.log(0 || "Hello"); // Hello(Pois o zero é falso)

console.log("" && "World"); // empty string(significa que a string está vazia)

console.log(null ?? "Default Value"); // Default Value(Pois o ?? não volta valor nulo)

console.log(undefined ?? 42); // 42(volta o 42 porque undefined é nulo, já 42 tem um valor)
}
{
let resultado = 10 + 5 * 2 > 20 && !false; //Ele da o valor de falso, pois a conta da 20, e 20 não é maior que vinte, dando false
}
{
console.log("5" - 2); //3(a string vira um número e é subtraido pelo 2)
console.log("5" + 2); //52(a string vira um número, porém, ele é incrementado ao 2, virando 55)
console.log(true + 1); //2(porque o valor de true é 1)
console.log(false + 10); //10(porque o valor de false é 0)
}
{
let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3); /*Passo 1: Primeiro  o x++ continua sendo 5 pois quando o ++ vem depois ele não altera
Passo 2: o --y se transforma em 9, pois o -- vem antes e diminui 1 do 10
Passo 3: virando 5 * 45
Passo 4: o y continua sendo 9, porque nós alteramos o seu valor
Passo 5: o resto de 9 dividido por 3 é 0
Passo 6: depois dividimos o 45 por 5, que vira 22,5
Passo 7: por último somamos o 22,5 por 0, dando 22,5
Conta: (5 * 9)/ 2 + (9 % 3) = (45) / 2 + (0) = 45/2 + 0 = 22,5 + 0 = 22,5
*/
}
