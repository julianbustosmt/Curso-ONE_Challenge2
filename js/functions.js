const transition = (scope) => {
    if(scope == "start") {
        imgHangedMan.classList.remove('hidden')
        sectionCanva.classList.add('hidden')
        
        txtNewGame.innerHTML = "Iniciar juego"
        bntNewGame.classList.remove('btn-newGame')
        bntNewGame.classList.add('btn-startGame')
    
        txtDesist.innerHTML = "Nueva palabra"
        btnDesist.classList.remove('btn-desist')
        btnDesist.classList.add('btn-newWord')
        
    } else if(scope == "newGame"){
        imgHangedMan.classList.add('hidden')
        sectionCanva.classList.remove('hidden')
        
        txtStartGame.innerHTML = "Nuevo juego"
        btnStartGame.classList.add('btn-newGame')
        btnStartGame.classList.remove('btn-startGame')
    
        txtNewWord.innerHTML = "Desistir"
        btnNewWord.classList.add('btn-desist')
        btnNewWord.classList.remove('btn-newWord')
    }

}