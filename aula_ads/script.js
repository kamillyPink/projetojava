let num1 = Number(prompt("Digite o primeiro número:"));
let operacao = prompt("Digite a operação (+, -, *, /):");
let num2 = Number(prompt("Digite o segundo número:"));

let resultado;

if (operacao === "+") {
    resultado = num1 + num2;
} else if (operacao === "-") {
    resultado = num1 - num2;
} else if (operacao === "*") {
    resultado = num1 * num2;
} else if (operacao === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        alert("ta dificil viu, burra!");
    }
} else {
    alert("Operação inválida!");
}

if (resultado !== undefined) {
    alert("Resultado: " + resultado);
}