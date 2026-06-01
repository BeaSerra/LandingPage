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

    if (nome === "" || email === "") {
        document.getElementById("mensagem").innerHTML = "Preencha os campos obrigatórios.";
        return;
    }

    const data = new FormData(form);

    fetch("URL_DO_SEU_SCRIPT", {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(() => {
        alert("Cadastro realizado! Seu download vai começar.");
        window.location.href = "ebook.pdf";
    });
});

