

const contador = 0;

let dias = 14;
let horas = 0;
let minutos = 0;
let segundos = 0;


const countdown = () => {
    document.getElementById('day').innerHTML = dias < 10 ? "0" + dias : dias
    document.getElementById('hours').innerHTML = horas < 10 ? "0" + horas : horas
    document.getElementById('minute').innerHTML = minutos < 10 ? "0" + minutos : minutos
    document.getElementById('second').innerHTML = segundos < 10 ? "0" + segundos : segundos

    if (horas === 0 && minutos === 0 && segundos === 0) {
        dias -= 1;
        horas = 23;
        minutos = 59;
        segundos = 59;
    } else if (minutos === 0 && segundos === 0) {
        horas -= 1;
        minutos = 59;
        segundos = 59;
    } else if (segundos === 0) {
        minutos -= 1;
        segundos = 59;
    }
    segundos -= 1;
 
}

setInterval(() => {
   countdown()
}, 1000);