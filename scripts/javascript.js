const form = document.querySelector("#form")
const utiliInput = document.querySelector("#util")
const passwInput = document.querySelector("#pass")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //util vazio
    if(utiliInput.value === "") {
        alert("Por favor preencha o seu utilizador");
        return;
    }


    //se os campos estiverem preenchidos
    form.submit();

    //verifica se o email esta preecnhido e válido
    if(passwInput.value === "") {
        alert("Por favor preencha a sua Palavra-Passe");
        return;
    }
});



