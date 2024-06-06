const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo"
];
//slice = significa cortar. fatiar
//alunos.slice(0, 10) - é necessario criar uma variavel pois o metodo slice cria
//uma cópia do array priginal
const sala1 = alunos.slice(0, 10); // o aluno 10 (com indice 10)não é inserido
const sala2 = alunos.slice(10); // náo é necessario colocar o até o final, basta suprimir

// Também pode escrever dessa maneira!!!
// const sala1 = alunos.slice(0, alunos.length/2); OU SEJA DO INDICE 0 ATÉ A METADE
// const sala2 = alunos.slice(alunos.length/2); DA METADE ATE O FINAL DO ARRAY


console.log(sala1);
console.log(sala2);