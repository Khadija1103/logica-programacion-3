// Práctica de Factorial

// Solicitar un número al usuario
let numero = Number(prompt("Ingrese un número entero positivo:"));

// Verificar que el dato ingresado sea un número
if (isNaN(numero)) {

    console.log("Error: Debe ingresar un número válido.");

} else if (numero < 0) {

    console.log("El factorial no existe para números negativos.");

} else {

    let factorial = 1;

    // Calcular el factorial
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    console.log(`El factorial de ${numero} es: ${factorial}`);
}