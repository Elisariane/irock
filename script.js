function sayHi(){
    alert('Hello, eu sou a rocha de estimação.');
}

function touchRock() {
    let userName = prompt("Qual o seu nome?");

    if (userName) {
        alert(`Prazer em conhecer você, ${userName}!`);
        document.getElementById("rockImg").src = "img/rock_happy.png";
    }
}