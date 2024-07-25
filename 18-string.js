//È possivel utilizar alguns metodos e array e laços de  repetiçõ para acessar
//e alterar string;

const nome = "Ana"; //Variavel string e não array
let nomeMaisculos = ""; //inicialização

for(let i = 0; i < nome.length; i ++){
    nomeMaisculos = nomeMaisculas + nome[i].toLocaleUpperCase ()
}
console.log(nomeMaisculas)//ana