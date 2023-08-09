import EntradaDados from 'readline-sync';

console.log("Nome completo \n");

var nome = EntradaDados.question("digite seu nome: ");
var sobrenome = EntradaDados.question("Digite seu Sobrenome: \n");

console.log("Nome completo: " + nome + " " + sobrenome)
