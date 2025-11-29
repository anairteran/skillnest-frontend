//variable spanSeleccionado corresponderá a el span con id de mi html:
//js lo identifica con el '#likes2' del onclick="darLike('#likes2')"
//eso viene de mi id del <span id="likes2">0</span> Me gusta(s)</p>
let spanSeleccionado = document.querySelector 

//la funcion es la que incrementará el número
function darLike(spanSeleccionado) { //este nombre se ejecuta al dar clic en el boton darLike("#")
    let span = document.querySelector(spanSeleccionado);

    let num = Number(span.textContent); //crea variable num y convierte en num el texto del span
    span.textContent = num + 1; //al span numero le suma 1 por cada clic
}