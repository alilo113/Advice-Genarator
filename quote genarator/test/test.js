let words = [
    "fuck",
    'dsf',
]

let form = document.getElementById('form');

form.addEventListener("submit", (e) =>{
    document.getElementById('random').innerHTML = words[Math.floor(Math.random * words.length)];
})