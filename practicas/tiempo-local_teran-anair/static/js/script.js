// ELIMINAR COOKIES
let navCokies = document.querySelector(".cookies-banner");


function aceptarCookies() {
    // navCokies.style.display='none';  //se puede ocular con css
    navCokies.remove(); //se puede ocultar con remove ("eliminando" el contenedor del nav en el html)
}

// ----------CAMBIAR TEMPERATURAS --------------------
// 1. Buscamos el selector de unidades (°C o °F)
const selector = document.querySelector("#unit");

// 2. Buscamos todos los números de temperatura en las tarjetas
const temperaturas = document.querySelectorAll(".temperaturas p");

// 3. Aquí guardaremos las temperaturas originales en °C
let tempsOriginales = [];

// 4. Este FOR recorre cada temperatura y guarda su valor inicial
for (let i = 0; i < temperaturas.length; i++) {

    // Quitamos el símbolo ° y lo convertimos a número
    let numero = parseInt(temperaturas[i].textContent);

    // Guardamos el número original en la lista
    tempsOriginales.push(numero);
}


// 5. Cuando el usuario cambia entre °C y °F, hacemos algo
selector.addEventListener("change", () => {

    // Guardamos la selección "c" o "f"
    let unidad = selector.value;

    // 6. Volvemos a recorrer ******TODAS**** las temperaturas
    for (let i = 0; i < temperaturas.length; i++) {

        // Este es el valor original en °C
        let celsius = tempsOriginales[i];

        // 7. Si se selecciona °C, mostramos valores originales
        if (unidad === "c") {
            temperaturas[i].textContent = celsius + "°";
        }

        // 8. Si se selecciona °F, se hace la conversión
        else {
            // Fórmula: (C × 1.8) + 32
            let fahrenheit = Math.round(celsius * 1.8 + 32);

            // se muestra el nuevo valor con el símbolo °
            temperaturas[i].textContent = fahrenheit + "°";
        }
    }
});
