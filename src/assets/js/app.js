function Entrar() {
   
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    const tipo = document.querySelector('select').value;

   
    if (email !== "" && senha !== "" && tipo !== "") {
        
        window.location.href = "inicio.html";
    } else {
       
        alert("Por favor, preencha todos os campos e selecione o tipo de usuário.");
    }
}



function Cadastrar() {
    const nomeLivro = document.querySelector('#nomeLivro').value;
    const nomeAutor = document.querySelector('#autor').value;
    const miniResumo = document.querySelector('#miniResumo').value;
    const categoria = document.querySelector('#categoria').value;

    alert(
        `Livro "${nomeLivro}" do autor(a) "${nomeAutor}",
         categoria: ${categoria}.
         Resumo do livro: ${miniResumo}
         Cadastrado com Sucesso!`
    );
}