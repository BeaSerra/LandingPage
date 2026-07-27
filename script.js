document.querySelector('#btnDownload').addEventListener('click', function(e) {
    e.preventDefault(); 
    const target = document.querySelector('#formulario');
    
    target.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'     
    });
});

// Envio do formulário
const form = document.getElementById("formEbook");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    const divMensagem = document.getElementById("mensagem");

    if (nome === "" || email === "") {
        divMensagem.style.color = "#ffcccc"; 
        divMensagem.innerHTML = "Preencha todos os campos obrigatórios.";
        return;
    }

    divMensagem.style.color = "#ffffff";
    divMensagem.innerHTML = "Processando..."; 

    const data = new FormData(form);

    fetch("URL_DO_SEU_SCRIPT", {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(() => {
        divMensagem.innerHTML = "Cadastro realizado! Download iniciado.";
        alert("Cadastro realizado! Seu download vai começar.");
        window.location.href = "ebook.pdf";
        form.reset(); 
    })
    .catch(err => {
        divMensagem.style.color = "#ffcccc";
        divMensagem.innerHTML = "Ocorreu um erro. Tente novamente.";
    });
});