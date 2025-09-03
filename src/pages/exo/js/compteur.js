let compteur = document.querySelector("#compteur")
let btn = document.querySelector("#increment-btn")
let progress = document.querySelector('.progress')
let reset = document.querySelector('#reset-btn')



btn.addEventListener("click",()=> {
    sessionStorage.setItem("compteur_mensonge", compteur.textContent = parseInt(compteur.textContent) +1)
    progress.value = compteur.textContent
    console.log(progress.value);
})
window.addEventListener("load",() => {
    compteur.textContent = sessionStorage.getItem("compteur_mensonge") ? sessionStorage.getItem("compteur_mensonge") : 0
})

reset.addEventListener("click",()=> {
    sessionStorage.setItem("compteur_mensonge", compteur.textContent = 0)
    progress.value = compteur.textContent
    console.log(progress.value);
})