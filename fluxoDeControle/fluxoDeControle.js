console.log("Escolha uma opção do menu:");
menu = parseInt(prompt("1. Varificar se é positivo; \n 2. par ou ímpar; \n 3. Boas-vindas por turno; \n 4. Maior de dois números; \n 5. Uso do operador ternário; \n 6. Menu simples com switch; \n 7. Contador de 1 a 5 com while; \n 8. Contagem regressiva com do...while; \n 9. Imprimir de 1 a 10 com for; \n 10. Somar números de 1 a 10; \n 11. Imprimir elementos de um array com for; \n 12. Usar for...of com array; \n 13. Usar for...in com objeto; \n 14. Parar contagem com break; \n 15. Pular número com continue; \n 16. Classificar nota do aluno; \n 17. Tabuada de um número; \n 18. Contar elementos numéricos em um array misto."));

switch(menu){
    case 1:ex1();
    break;
    case 2:ex2();
    break;
    case 3:ex3();
    break;
    case 4:ex4();
    break;
    case 5:ex5();
    break;
    case 6:ex6();
    break;
    case 7:ex7();
    break;
    case 8:ex8();
    break;
    case 9:ex9();
    break;
    case 10:ex10();
    break;
    case 11:ex11();
    break;
    case 12:ex12();
    break;
    case 13:ex13();
    break;
    case 14:ex14();
    break;
    case 15:ex15();
    break;
    case 16:ex16();
    break;
    case 17:ex17();
    break;
    case 18:ex18();
    break;
    default: console.log("Valor inválido!!");

}

function ex1(){
        let valor = 0;
        valor = parseInt(prompt("Digite um número:"));

        if (valor > 0) {
            alert("O seu resultado é positivo");
        }
}
function ex2(){
    let n = 0;
        n = parseInt(prompt("Digite um número:"));

        if (n % 2 === 0) {
            alert("O seu resultado é par");
        } else{
            alert("O seu resultado é ímpar");
        }
}
function ex3(){
    let periodo = "m";

    if(periodo === "m"){
        console.log("Bom dia!🥱");
    } else if(periodo === "t"){
        console.log("Boa tarde!🤯");
    }else if(periodo === "n"){
        console.log("Boa noite!😪");
    }else{
        console.log("Não tem essa opção!")
    }
}
function ex4(){
    let num = 0;
    num = parseInt(prompt("Digite o primeiro número:"));

    let num2 = 0;
    num2 = parseInt(prompt("Digite o segundo número:"));

    if(num > num2){
      console.log("O maior número é o primeiro");
    } else if(num < num2){
      console.log("O maior número é o segundo"); 
    } else{
      console.log("Eles tem o mesmo valor");
    }
}
function ex5(){
    let numero = 13;

    console.log(numero > 0 ? "Positivo" : "Negativo");
}
function ex6(){
    let escolha = " ";
    escolha = parseInt(prompt("Escolha um:"));
    console.log("1. Inicio");
    console.log("2. Sobre");
    console.log("3. Sair");

    switch(escolha){
        case 1:
            console.log("Inicio");
            break;
        case 2:
            console.log("Sobre");
            break;
        case 3:
            console.log("Sair");
            break;
    }
}
function ex7(){
    let number = 0;

    while(number < 5){
        number++;
    console.log(number);
    }
}
function ex8(){
    let contador = 6; 

    do{   
        contador--;
        console.log(contador);
    }while(contador > 0);
}
function ex9(){
    for (let num = 1; num < 11; num++) {
        console.log(num);
    }
}
function ex10(){
    let resul = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let soma = 0;

    for (let num = 0; num < 10; num++) {
    soma += resul[num];
}
console.log(soma);// 55
}
function ex11(){
    let animes = ["Diarios de uma apotecaria", "Ranma 1/2", "Wotakoi", "Horimiya"];

    for (let i = 0; i < animes.length; i++) {
    console.log(animes[i]);
  }
}
function ex12(){
    let filmes = ["Nosferatu", "Dracula", "Elvira", "Beetlejuice"];
    let genero = "goticos";
    for (let filmes of genero) {

}
    console.log("Esses filmes: " + filmes + " são " + genero);
}
function ex13(){
    let personagem = {
        nome: "Sakura",
        anime: "Naruto",
        idade: 17
    }
    for (let key in personagem) {
        console.log(key);
    }    
}
function ex14(){
    let numero = 0;

while (numero <= 10){
    console.log(numero);
    numero++;
    if (numero >= 6) {
        break;
    }
}
}
function ex15(){
    for (let n = 0; n < 11; n++) {
        if (n == 7) {
            continue;
        }
        console.log(n);
    }    
}
function ex16(){
    let nota = 0;
    nota = parseInt(prompt("Digite a sua nota:"));

    if(nota < 6){
        console.log("Você está reprovado!");
    }else if(nota > 6 && nota <= 7.9){
        console.log("Você está de recuperação!");  
    }else if(nota > 8){
        console.log("Você está aprovado!");
    } else{
        console.log("Nota inválida!");
    }
}
function ex17(){
    let num = 0;
    num = parseInt(prompt("Digite um número:"));

    for (let i = 1; i <= 10; i++) {
    console.log(num * i)
}
}
function ex18(){
    let arrays = [69, "Lirili larila", false, null, undefined, 24];

    let contador = 0;

    for(const elemento of arrays){
    if (typeof elemento == "number"){
        contador++;
    }
}
    console.log("Quantos são números:" + contador);
}
