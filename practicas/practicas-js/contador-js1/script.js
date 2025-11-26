        //html
        // <div id="valor" class="numero">0</div>

        // <div class="botones">
            // <button class="menos" onclick="actualizar(-1)">-1</button>
            // <button class="reset" onclick="actualizar(0)">0</button>
            // <button class="mas" onclick="actualizar(+1)">+1</button>
        // </div>

//let contador = Number(document.querySelector('#valor'));

function actualizar(valorBtn){
    let contador = document.querySelector('#valor');
    let valorActual = contador.textContent

    //convertilor según valor
    valorActual = parseInt(valorActual)

    //cambiarlo segun valor
    if (valorBtn === 0){
        contador.textContent = valorActual*0
    }
    if (valorBtn === +1){
        contador.textContent = valorActual+1
    }
    if (valorBtn === -1){
        contador.textContent = valorActual-1
    }

}
