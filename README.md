# Práctica de Factorial

## Algoritmo

1. Solicitar un número al usuario.
2. Convertir el valor ingresado a tipo `Number`.
3. Verificar que el dato sea un número.
4. Si no es un número, mostrar un mensaje de error.
5. Si el número es negativo, indicar que el factorial no existe.
6. Inicializar la variable `factorial` en 1.
7. Recorrer los números desde 1 hasta el número ingresado.
8. Multiplicar cada número por el factorial acumulado.
9. Mostrar el resultado en la consola.

## Pseudocódigo

Inicio

Leer número
Convertir a Number

Si no es un número Entonces
    Mostrar "Debe ingresar un número válido"
Sino
    Si número < 0 Entonces
        Mostrar "El factorial no existe para números negativos"
    Sino
        factorial ← 1

        Para i ← 1 Hasta número Hacer
            factorial ← factorial * i
        Fin Para

        Mostrar "El factorial es: ", factorial
    Fin Si
Fin Si

Fin
