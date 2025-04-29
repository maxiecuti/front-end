console.log("Escolha uma opção do menu:");
menu = parseInt(prompt("1. Listar nomes com for...of; \n 2. Somar valores com for...of; \n 3. Exibir propriedades de um objeto com for...in; \n 4.Contar quantas propriedades tem um objeto; \n 5. Concatenar nomes em uma string com for...of; \n 6. Imprimir tipos de dados de elementos de um array; \n 7. Transformar valores de um objeto; \n 8. Converter objeto em array de strings."));

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
    default: console.log("Valor inválido!!");
}

function ex1(){
    let nomes = ["Castiel","Nathaniel","Armin","Kentin","Priya"];
    
    for(let nome of nomes){
        console.log(nome);
    }
}

function ex2(){
    let nums = [69, 24, 7, 13];
    let soma = 0;
    
    for(let num of nums){
        soma += num;
    }
    console.log(soma);
}

function ex3(){
    let pessoa = {nome: "Ana beatriz", idade: 10, cidade: "Sorocaba"};
    
    for(let key in pessoa){
        console.log(key + ": " + pessoa[key]);
    }
}

function ex4(){
    let endereco = {rua: "Rua do José Antunes Soares", bairro: "Jardim Vila Haro", numero: 47}
    let soma = 0;
    
    for(let propriedades in endereco){
        soma++;
    } console.log(soma);
}

function ex5(){
    let nomes = ["Maomao","Jinshi","Gaoshun","Gyokuyou","Loulan"];
    let todosNomes = " ";
    
    for(let nome of nomes){
        todos += nome + ", ";
    }
    console.log(todosNomes);
}

function ex6(){
    let elementos = [13, null, "Batata Frita", true, undefined];
    
    for(let valor of elementos){
        console.log(typeof valor);
    }
}

function ex7(){
    let pessoas = [{nome: "Isis", idade: 7},{nome: "Elis", idade: 6}];
    
    for(let chave in pessoas){
      idade = pessoas[chave].idade + 1;
    console.log(idade);
    }
 }
    
function ex8(){
    let animes = {personagem: "Inuyasha", anime: "Inuyasha"};
    let espacoAnime = " ";
        
    for(let chave in animes){
        espacoAnime += chave + ": " + animes[chave] + " ";
    }console.log(espacoAnime);
 }
    