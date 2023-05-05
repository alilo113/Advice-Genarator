const iconDice = document.getElementById("icon-dice");
const adviceContainer = document.getElementById("advice");
const id = document.getElementById("advice-id");
iconDice.addEventListener("click", fetchAdvice);

function fetchAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        displayAdvice(data);
    })
}

fetchAdvice()

function displayAdvice(data){
    for(key in data){
        const adviceId = `<p>#Advice ${data[key].id}</p>`;
        const advice = `<h2>${data[key].advice}</h2>`; 
        adviceContainer.innerHTML = advice;
        id.innerHTML = adviceId;
    }
}