'use strict';

const display = document.getElementById('display');
const btnDecrease = document.getElementById('decrease');
const btnReset = document.getElementById('reset');
const btnIncrease = document.getElementById('increase');

if (!display || !btnDecrease || !btnReset || !btnIncrease) {
    console.error('Um ou mais elementos do contador estáo faltando no HTML. Verifique os IDs: display, decrease, reset, increase.');
    throw new error('Elementos do contador não encontrados')
}
let contador = Number(display.textContent) || 0;

function atualizarDisplay() {
    display.textContent = contador
}
function aumentar() {
    contador += 1;
    atualizarDisplay();
}
function diminuir() {
    contador -= 1;
    atualizarDisplay();
}
function resetar() {
    contador = 0;
    atualizarDisplay();
}
btnIncrease.addEventListener('click', aumentar);
btnDecrease.addEventListener('click', diminuir);
btnReset.addEventListener('click', resetar);

atualizarDisplay();
