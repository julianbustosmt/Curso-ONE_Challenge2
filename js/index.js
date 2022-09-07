/** Choose word */

const chooseWord = () => {
    let words = ['python', 'java', 'javascript', 'html', 'css', 'typescript', 'kotlin', 'swift', 'php']
    /*     let words = ['perro','gato','vaca','toro','leon','manati','raton','jaguar','elefante','jirafa','trigre','pantera'] */
    return words[Math.floor(Math.random() * words.length)]
}

const createWord = (word) => {
    const inputWord = document.querySelector('.word')
    for (let i = 0; i < word.length; i++) {
        let letter = document.createElement('div')
        letter.classList.add(`letter${i}`, 'letter')
        inputWord.appendChild(letter)
    }
}

const cleanWord = (word) => {
    const divWord = document.querySelector(".word")
    for (let i = 0; i < word.length; i++) {
        let letter = document.querySelector(`.letter${i}`)
        divWord.removeChild(letter)
    }
}

let wrongLetters = []
let correctLetter = []
let attempts = 8
let inputWord = 0;
let win = false

const machWord = (letter, word) => {
    let wordLetters = ([...word]) /** Crea arreglo con la letras de las palabras seleccionada al azar */
    let expresion = /[A-Za-z]/
    let especial = ["shift", "alt", "tab", "enter", "backspace", "control", "capslock", "arrowleft", "arrowup", "arrowright", "arrowright", "delete", "end", "pagedown", "pageup", "numlock", "insert", "home"]

    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter && attempts > 0) {
            let divLetter = document.querySelector(`.letter${i}`)
            divLetter.textContent = letter.toUpperCase()
            if(!correctLetter.includes(letter)){
                inputWord += findUniqueLetter(word,letter)
                correctLetter.push(letter)  
            }
        }   
        else if (
            !wrongLetters.includes(letter) && 
            !wordLetters.includes(letter) &&
            expresion.test(letter) &&
            !especial.includes(letter.toLowerCase()) &&
            letter != " " &&
            attempts > 0 && 
            !win
            ){
            wrongLetters.push(letter)
            attempts--
            drawHangMan(attempts)
        }
    }
}

const findUniqueLetter = (word, letter) =>{
    let unique = 0
    for (i = 0; i< word.length ;i++ ){
        if(word[i] == letter){
            unique += 1
        }
    }
    return unique
}

const decideWinner = () => {
    if (attempts <= 0) {
        modalContent('Lo siento, has perdido',`La palabra era: ${word}`,'loser')
    } else if (attempts > 0 && inputWord == word.length) {
        win = true
        modalContent('Felicitaciones, ganaste','Has salvado una vida','winner')
    }
}

const showWrongLetter = (wrongLetters) => {
    const divWrongLetter = document.querySelector('.wrongLetters')
    divWrongLetter.textContent = wrongLetters
}

const divHangedMan = document.querySelector('.canva-hangedMan')
const drawHangMan = (attempts) => {
    console.log("intentos", attempts)
    switch (attempts) {
        case 8:
            divHangedMan.style.backgroundImage = "";
            break;
        case 7:
            divHangedMan.style.backgroundImage = "url(img/HangedMan-Draw/Gallow.svg)";
            break;
        case 6:
            divHangedMan.style.backgroundImage = "url(img/HangedMan-Draw/Head.svg)";
            break;
        case 5:
            divHangedMan.style.backgroundImage = "url(img/HangedMan-Draw/Torso.svg)";
            break;
        case 4:
            divHangedMan.style.backgroundImage = "url(img/HangedMan-Draw/Right arm.svg)";
            break;
        case 3:
            divHangedMan.style.backgroundImage = "url(img/HangedMan-Draw/Left arm.svg)";
            break;
        case 2:
            divHangedMan.style.backgroundImage = "url(img/HangedMan-Draw/Right leg.svg)";
            break;
        case 1:
            divHangedMan.style.backgroundImage = "url(img/HangedMan-Draw/HangedMan.svg)";
            break;
    }
}

const startGame = () =>{
    transition("newGame")
    if (word == "") {
        word = chooseWord()
        console.log(word)
    }
    createWord(word)
    html.addEventListener("keydown", (event) => {
        letter = event.key.toLocaleLowerCase()
        machWord(letter, word)
        showWrongLetter(wrongLetters)
        decideWinner()
    }) 
}

const newGame = () =>{
    cleanWord(word)
    word = ""
    attempts = 8
    wrongLetters = []
    correctLetter = []
    attempts = 8
    inputWord = 0;
    win = false
    drawHangMan(attempts)
    showWrongLetter(wrongLetters)
    startGame()
}