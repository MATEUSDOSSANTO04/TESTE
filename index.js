import * as EntradaDados from 'readline-sync';

console.log("Nome completo \n");

var nome = EntradaDados.question("Digite seu nome: ");
var sobrenome = EntradaDados.question("Digite seu sobrenome: \n");

console.log("Nome completo: " + nome + " " + sobrenome);


