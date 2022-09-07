/** Start game */
const html = document.querySelector('html')

const btnStartGame = document.querySelector('.btn-startGame')
const btnNewWord = document.querySelector('.btn-newWord')

const bntNewGame = document.querySelector('.btn-newGame')
const btnDesist = document.querySelector('.btn-desist')

const btnModal = document.getElementById('playAgain')
const btnModalNW = document.getElementById('newWord')
const inputNewWord = document.getElementById('inputNewWord')

let word = ""

btnStartGame.addEventListener("click", () => {
    startGame()
})  

bntNewGame.addEventListener("click", () => {
    newGame()
})  

btnNewWord.addEventListener("click", () => {
    modalContent("Nueva palabra", "Escribe la nueva palabra: ", "newWord")
})

btnDesist.addEventListener("click", () => {
    location.reload()
})


btnModal.addEventListener("click", () =>{
    newGame()
    modal.classList.remove("modal--show")
})

btnModalNW.addEventListener("click" ,()=>{
    word = inputNewWord.value.toLowerCase()
    startGame()
    modal.classList.remove("modal--show")
    inputNewWord.value = ""
})