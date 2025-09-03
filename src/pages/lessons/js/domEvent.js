const eventTitle = document.querySelector('#event-title')

eventTitle.addEventListener("click", (e) => e.target.textContent = e.target.textContent.trim() == "D.O.M Events" ? "-- 🥳--" : "D.O.M Events")


// Lessons Event Clavier
const inputTextElement = document.getElementById('input-text');
const renderKeyElement = document.getElementById('renderKey');
const submitBtn = document.getElementById('spy-submit-btn')
// console.log(inputTextElement);
inputTextElement.addEventListener('keyup', (eventDuclavier) => {
    // console.log(eventDuclavier);
    console.log('eventDuclavier.key', eventDuclavier.key);
  
    renderKeyElement.textContent = eventDuclavier.target.value;
    localStorage.setItem('monSuperTexte', renderKeyElement.textContent)

    renderKeyElement.textContent.length >= 5 ? submitBtn.disabled = true : submitBtn.disabled = false

});

window.addEventListener("load", (event) => {
  renderKeyElement.textContent = localStorage.getItem('monSuperTexte') 
  inputTextElement.value  = localStorage.getItem('monSuperTexte')
});


