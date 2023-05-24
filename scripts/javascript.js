const form = document.querySelector("#form")
const utiliInput = document.querySelector("#util")
const passwInput = document.querySelector("#pass")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //utilizador e password vazio
    if(utiliInput.value === "" && passwInput.value==="") {
        alert("Por favor preencha as suas credenciais.");
        return;
    }
    
    //utilizador vazio
    if(utiliInput.value === "") {
        alert("Por favor preencha o seu nome de utilizador.");
        return;
    }

    //password vazio
    if(passwInput.value === "") {
        alert("Por favor preencha a sua palavra-passe.");
        return;
    }

    //se os campos estiverem preenchidos
    form.submit();
});