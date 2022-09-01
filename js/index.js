/** Choose word */

const chooseWord = () =>{
    let words = ['python','java','javascript','html','css','typescript','kotlin','swift','php']
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
        }
    }
}

const showWrongLetter = (wrongLetters) =>{
    let divWrongLetter = document.querySelector('.wrongLetters')
    divWrongLetter.textContent = wrongLetters
}
