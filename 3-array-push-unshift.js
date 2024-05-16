//Definido um array de frutas 
var frutas = ['Maçã', 'Banana', 'Laranja', 'Pessego', 'Abacaxi'];

//Removendo o ultimo elemento do array usando ometodo pop
var ultimaFruta = frutas.pop();

console.log('Array  após remover o ultimo elemento:', frutas); //Saída: ['ma
console.log('Primeira fruta removida:', ultimaFruta); //Saida: 'Abacaxi'

//removendo o primeiro elemento do array usando o meoddo shift
var primeiraFruta = frutas.shift();
console.log('Array após remover o primeiro elemento:', frutas); //Saida: ['Banana', 'Laranja',]
console.log('Primeira fruta removida:', primeiraFruta);//saida: Maçâ'