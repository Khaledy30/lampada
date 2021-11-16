const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1;
}

//função para troca de img da lampada
function lampOn(){
    //verifica se ela esta quebrada
    //caso nao esteja, troca a img
    //caso esteja nao troca
    if(!isLampBroken()){ 
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff(){
    //verifica se ela esta quebrada
    //caso nao esteja, troca a img
    //caso esteja nao troca
    if(!isLampBroken()) { 
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}

//ao clicar ativar a função
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

//eventos, se passar por cima da lampada liga, se tirar desliga
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);

//double click quebra a lampada
lamp.addEventListener('dblclick', lampBroken);