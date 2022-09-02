/** Choose word */

const chooseWord = () =>{
    let words = ['python','java','javascript','html','css','typescript','kotlin','swift','php']
/*     let words = ['perro','gato','vaca','toro','leon','manati','raton','jaguar','elefante','jirafa','trigre','pantera'] */
    return words[Math.floor(Math.random()*words.length)]
}

/* const createDash = (word) =>{
    let dashes = "_ ".repeat(word.length)
    return dashes
} */

const createWord = (word) =>{

    for(let i = 0; i<word.length; i++){
        let letter = document.createElement('div')
        letter.classList.add(`letter${i}`, 'letter')
        inputWord.appendChild(letter)
    }
}

let wrongLetters = []
let attempts = 8

const machWord = (letter, word) =>{
    let wordLetters = ([...word]) /** Crea arreglo con la letras de las palabras seleccionada al azar */
    let expresion = /[A-Za-z]/
    let especial = ["shift","alt","tab","enter","backspace","control","capslock","arrowleft","arrowup","arrowright","arrowright","delete","end","pagedown","pageup","numlock","insert","home"]

    for(let i = 0; i<word.length; i++){
        if(word[i] == letter){
            let divLetter = document.querySelector(`.letter${i}`)
            divLetter.textContent = letter.toUpperCase()
        }else if(!wrongLetters.includes(letter) && !wordLetters.includes(letter) && expresion.test(letter) && !especial.includes(letter.toLowerCase()) && letter != " "){
            wrongLetters.push(letter)
            attempts --
            drawHangMan(attempts)
        }
    }
}

const showWrongLetter = (wrongLetters) =>{
    let divWrongLetter = document.querySelector('.wrongLetters')
    divWrongLetter.textContent = wrongLetters
}


const divHangedMan = document.querySelector('.canva-hangedMan')
const drawHangMan = (attempts,img) =>{
    switch(attempts){
        case 7: 
            divHangedMan.style.backgroundImage = "url(../img/HangedMan-Draw/Gallow.svg)";
            break;
        case 6:
            divHangedMan.style.backgroundImage = "url('../../img/HangedMan-Draw/Head.svg')";
            break;
        case 5:
            divHangedMan.style.backgroundImage = "url('../img/HangedMan-Draw/Torso.svg')";
            break;
        case 4:
            divHangedMan.style.backgroundImage = "url('../img/HangedMan-Draw/Right arm.svg')";
            break;
        case 3:
            divHangedMan.style.backgroundImage = "url('../img/HangedMan-Draw/Left arm.svg')";
            break;
        case 2:
            divHangedMan.style.backgroundImage = "url('../img/HangedMan-Draw/Right leg.svg')";
            break;
        case 1:
            divHangedMan.style.backgroundImage = "url('../img/HangedMan-Draw/HangedMan.svg')";
            break;
        case 0:
            divHangedMan.style.backgroundImage = "url('../img/HangedMan-Draw/Gallow.svg')";
            break;
    }
}