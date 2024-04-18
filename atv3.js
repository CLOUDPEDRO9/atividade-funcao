/*
Nome: Pedro Henrique de Oliveira Alves

Exercício 3
Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
*/
console.clear();
var teclado3 = require('prompt-sync')();
function VolumeEsfera(volume) {
    var pi = 3.14159;
    var volumeLata = (4 / 3) * pi * (raio * raio * raio);
    return volumeLata;
}
var raio = parseFloat(teclado3("Digite o raio: "));
var resultado3 = VolumeEsfera(raio);
console.log("O volume da lata \u00E9 ".concat(resultado3));
