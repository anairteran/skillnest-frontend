        //html
        // <div id="valor" class="numero">0</div>

        // <div class="botones">
        //     <button class="menos" onclick="restar()">-1</button>
        //     <button class="reset" onclick="resetear()">0</button>
        //     <button class="mas" onclick="sumar()">+1</button>
        // </div>

//let contador = Number(document.querySelector('#valor'));

function sumar() {
    let contador = document.querySelector('#valor');
    let valor = contador.textContent
    //convertirlo a num
    valor = parseInt(valor);
    //cambiarlo
    contador.textContent = valor +1;
}

function resetear() {
    let contador = document.querySelector('#valor');
    let valor = contador.textContent
    //convertirlo a num
    valor = parseInt(valor);
    //cambiarlo
    contador.textContent = 0;
}


function restar() {
    let contador = document.querySelector('#valor');
    let valor = contador.textContent
    //convertirlo a num
    valor = parseInt(valor);
    //cambiarlo
    contador.textContent = valor -1;
}

