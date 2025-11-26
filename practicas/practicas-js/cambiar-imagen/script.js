//1. buscar el elemento en el DOM
const foto1 = document.getElementById('foto1');

//2. agregar el evento al elemento
foto1.addEventListener('mouseenter', function(){
    foto1.src = "./haymitch-jr.png";
    foto1.alt = "haymitch jr";
});

foto1.addEventListener('mouseleave', function(){
    foto1.src = "./haymitch.png";
    foto1.alt = "haymitch";
});