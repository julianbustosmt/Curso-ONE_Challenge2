const transition = (scope) => {
    const imgHangedMan = document.getElementById('img-hangedMan')
    const sectionCanva = document.querySelector('.hanged-man')
    if(scope == "start") {
        imgHangedMan.classList.remove('hidden')
        sectionCanva.classList.add('hidden')
        
        btnStartGame.classList.remove('hidden')
        bntNewGame.classList.add('hidden')
    
        btnNewWord.classList.remove('hidden')
        btnDesist.classList.add('hidden')
        
    } else if(scope == "newGame"){
        imgHangedMan.classList.add('hidden')
        sectionCanva.classList.remove('hidden')
        
        btnStartGame.classList.add('hidden')
        bntNewGame.classList.remove('hidden')
    
        btnNewWord.classList.add('hidden')
        btnDesist.classList.remove('hidden')
    }

}

const modalContent = (title, paragraph,type) => {

    const modalTitle = document.querySelector(".modal-title")
    const modalParagraph = document.querySelector(".modal-paragraph")

    modalTitle.textContent = title
    modalParagraph.textContent = paragraph

    const modal = document.getElementById("modal")
    modal.classList.add("modal--show")

    const closeModal = document.querySelector(".modal-close")
    closeModal.addEventListener("click", (event) => {
        modal.classList.remove("modal--show")
        event.preventDefault()
    })

    const imgWinner = document.getElementById("img-winner")
    const imgLoser = document.getElementById("img-loser")

    switch(type){
        case "winner":
            imgWinner.classList.add("modal-img--active")
            imgLoser.classList.remove("modal-img--active")
            modalTitle.classList.remove("modal-title--loser")
            btnModal.classList.remove("hidden")
            btnModalNW.classList.add("hidden")
            inputNewWord.classList.add("hidden")
            break
        case "loser":
            imgLoser.classList.add("modal-img--active")
            imgWinner.classList.remove("modal-img--active")
            modalTitle.classList.add("modal-title--loser")
            btnModal.classList.remove("hidden")
            btnModalNW.classList.add("hidden")
            inputNewWord.classList.add("hidden")
            break
        case "newWord":
            btnModal.classList.add("hidden")
            btnModalNW.classList.remove("hidden")
            inputNewWord.classList.remove("hidden")
    }
    
}