//const nota1 = 10;
//const nota1 = 6.5;
//const nota1 = 8;
//const nota1 = 7.5;

const notas = [10, 6.5, 8, 7.5]
let soma = 0
//const media = (notas[0]+notas[1]+notas[2]notas[3])/notas.length
for(let i = 0; i < notas.length; i++){
 soma+=notas[i];
 //soma = soma + notas[i];
}
const media= soma/notas.length;
console.log(media)
//let media = [1, 2, 3, 4]