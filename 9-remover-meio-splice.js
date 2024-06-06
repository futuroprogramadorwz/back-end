const alunos = ['joão', 'ana', 'caio', 'lara', 'Marjorie',  'leo',]

// splice = significa emendar, juntar
// o primeiro indica o índice do primeiro elemento a retirar e o segundo indica
// o metodo splice altera o array original (diferente do splice)



alunos.splice(1,1)
console.log(alunos)

alunos.splice(1,2,"Rodrigo")//Permmite um terceiro parâmetro
console.log(alunos)
