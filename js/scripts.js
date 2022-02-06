/*
General Explanation: Basically I call a newColors function that encompasses the entire set of the others
functions, working as a reset.
*/

/* Variaveis usadas */ 
const elements = {
    btn_colors: document.querySelectorAll('.boxes__colors'),
    btn_set: document.querySelectorAll('.options-set'),
    btn_some: [document.getElementById('bt-0'),
        document.getElementById('bt-1'),
        document.getElementById('bt-2'),
        document.getElementById('bt-3'), 
        document.getElementById('bt-4'), 
        document.getElementById('bt-5')],
    btn_vivos: [],
    btn_mortos: [],
    setado: false, /*false = hard, true = easy*/
    rgb_text: document.getElementById('home__h1'),
    home: document.getElementById('home'),
    btn_options: document.getElementById("options__btn"),
    try_again: document.getElementById('tryAgain'),
    modo: 'Hard'
}

novasCores(elements.modo)

function novasCores(modo){

elements.try_again.style.opacity = 0
elements.home.style.background = '#583E9E'
elements.modo = modo

/* Deactivate boxes that are not the selected color */ 
displayNone = function(cor, evento){
    let elemento = document.getElementById(evento).style
    if(elemento.backgroundColor != cor){
        elemento.display = "none";
        elements.try_again.style.opacity = 100
    }
    else if(elemento.backgroundColor === cor){
        return true
    }
}
/* Define the colors of the boxes and choose a color to guess from among them. */
funcaoAleatoria = function (){
    var cor = 0
    let texto
    let corAleatoria = Math.floor(Math.random() * 6)
    elements.btn_colors.forEach((event) => {
        texto = ''
        for(i = 0; i <= 2; i++){
            cor = Math.floor(Math.random() * 257)
            texto += cor
            if(i < 2){
                texto +=', '
            }
        }
        cor = 'rgb(' + texto + ')'
        var m = document.getElementById(event.id);
        c = m.style;
        c.backgroundColor = cor
    })
    corAleatoria = 'bt-' + corAleatoria
    corAleatoria = document.getElementById(corAleatoria).style.backgroundColor  

    return corAleatoria
}
/*Function that resets variables when the user wins*/ 
usuarioGanhou = function(ganhou, cor){
    if(ganhou){
        elements.home.style.background = cor
        for (var i = 0; i < elements.btn_colors.length; i++) {
            elements.btn_colors[i].style.display = "block"
            elements.btn_colors[i].style.backgroundColor = cor
            elements.setado = false
        }
    }
}

let cor = funcaoAleatoria()
elements.rgb_text.innerHTML = cor

for (var i = 0; i < elements.btn_colors.length; i++) {
    elements.btn_colors[i].addEventListener('click', function(event) {
        let valor = displayNone(cor, event.target.id)
        usuarioGanhou(valor, cor)
    });
}
}

/* Disabled buttons for bug fixes
if(modo === 'Easy'){
    modoEasy()
}
else if(modo === 'Hard'){
    modoHard()
}

function modoEasy(){
    
}

function modoHard(){
    console.log("HARD " + elements.index_btn_some)
    let auxiliar = 3
    let indexSome = elements.index_btn_some.length
    console.log("Index " + indexSome)
    while(auxiliar > 0 && indexSome > 0 && elements.setado === true){
        auxiliar--
        let index = elements.index_btn_some[auxiliar]
        console.log("Auxiliar " + auxiliar)
        elements.btn_some[index].classList.toggle("btn-some")
    }
    if(elements.setado === true){
        elements.setado = false
        elements.index_btn_some = []
    }
}

*/