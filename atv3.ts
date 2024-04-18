/* 
Nome: Pedro Henrique de Oliveira Alves

Exercício 3
Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
*/

console.clear();

const teclado3 = require('prompt-sync')();

function VolumeEsfera(volume: number): number {
    const pi : number =  3.14159;
    const volumeLata: number = (4/3) * pi * (raio * raio * raio);
    return volumeLata;
}

let raio : number = parseFloat(teclado3(`Digite o raio: `));
let resultado3 = VolumeEsfera(raio);
console.log(`O volume da lata é ${resultado3}`);
