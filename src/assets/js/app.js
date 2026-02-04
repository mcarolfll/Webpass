function Cadastrar() {
    let lv = document.querySelector("#lv").value;
    let at = document.querySelector("#at").value;
    let rs = document.querySelector("#rs").value;
    
    document.querySelector(".alert").innerHTML = `O livro cadastrado foi: ${lv}, o autor é: ${at} e o resumo é: ${rs}`;

  }
  