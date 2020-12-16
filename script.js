let button = document.getElementById('button');
let textInput = document.getElementById('text');
const voz = new SpeechSynthesisUtterance();

voz.lang = 'pt-br';
voz.rate = 1.8;


let voices = speechSynthesis.getVoices();
console.log(voices);


button.onclick = () => {
    if (checkText(textInput)) {
        voz.text = textInput.value;
        speechSynthesis.speak(voz);
    } else {
        alert('Digite um texto para poder reproduzir');
    }

};

function checkText(input) {
    if (input.value == '') {
        return false;
    } else {
        return true;
    }
}