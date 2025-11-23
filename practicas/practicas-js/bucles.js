// 1️⃣ Imprimir pares del 1 al 30: Usando un bucle, escribe un código que 
//imprima todos los números pares del 1 al 30. ¡Veamos si puedes resolverlo!
for (var i = 1; i < 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}

// 2️⃣ Imprimir múltiplos de 4 en orden descendente: Utilizando un bucle, escribe un código 
//que imprima todos los números que sean múltiplos de 4 en orden descendente, desde 100 hasta 0. ¡Inténtalo!
for (var i = 100; i > 0; i--) {
    if (i % 4 === 0) {
        console.log(i);
    }
}

// 3️⃣ Imprime la secuencia: Esta vez, queremos imprimir una secuencia un poco diferente. 
//Utiliza un bucle para imprimir los siguientes valores: 10, 7, 4, 1, -2, -5.
var x = 10; while (x > -7) {
    console.log(x); x -= 3;
}
// 4️⃣ Suma todos los números pares del 1 al 50: Utiliza un bucle para sumar todos los números pares 
//del 1 hasta el 50 y muestra el resultado de la suma con console log.
var x = 0

for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        x += i;
    }
}
console.log(x)

// 5️⃣ Factorial: Para este último desafío, necesitamos multiplicar todos los números 
//del 1 al 20. Es decir, 1 * 2 * 3 * … * 18 * 19 * 20. ¿Puedes calcular el producto final?
var x = 1

for (var i = 1; i <= 20; i++) {

    x *= i
}
console.log(x)
