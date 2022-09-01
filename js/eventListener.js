/** Start game */
const html = document.querySelector('html')

const imgHangedMan = document.getElementById('img-hangedMan')
const sectionCanva = document.querySelector('.hanged-man')
const dashes = document.querySelector('.dashes')
const inputWord = document.querySelector('.word')

const btnStartGame = document.querySelector('.btn-startGame')
const txtStartGame = document.querySelector('.txt-startGame')
const btnNewWord = document.querySelector('.btn-newWord')
const txtNewWord = document.querySelector('.txt-newWord')

const bntNewGame = document.querySelector('.btn-newGame')
const txtNewGame = document.querySelector('.txt-newGame')
const btnDesist = document.querySelector('.btn-desist')
const txtDesist = document.querySelector('.txt-desist')

let word = ""

btnStartGame.addEventListener("click" ,() =>{
    transition("newGame")
    if (word == ""){
        word = chooseWord()
        console.log(word)
        createWord(word)
    }else{
        
    }
})

html.addEventListener("keydown",(event)=>{
    letter = event.key.toLocaleLowerCase()
    machWord(letter,word)
    showWrongLetter(wrongLetters)
    console.log(divHangedMan)
})