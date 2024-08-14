//WHILE
console.log('TESTANDO COM "WHILE"')
var contador1 = 1

while (contador1 <= 6) {
    console.log(`Teste ${contador1}:`);
    console.log('Tudo bem?')
    contador1++ // c++ é c = c + 1
}

//While = estrutura de repetição com teste lógico no início
//Primeiro faz o teste, sendo verdadeiro ele faz o bloco

console.log() //deixar linha em branco para separar

//DO WHILE
console.log('TESTANDO COM "DO WHILE"')
var contador2 = 1

do {
    console.log(`Teste ${contador2}:`);
    console.log('Tudo bem?')
    contador2++ // c++ é c = c + 1
} while (contador2 <= 6)

console.log() //deixar linha em branco para separar

//do while = estrutua de repetição com teste lógico no final
//Primeiro executa o bloco e depois faz o teste

//FOR
/*for (inicialização; condição; expressãoFinal) {
    // instruções a serem executadas repetidamente
  } */

console.log('TESTANDO COM "FOR"')
for (var contador3 = 1; contador3 <= 6; contador3++) {
    //var ou let
    console.log(`Teste ${contador3}:`);
    console.log('Tudo bem?')
}