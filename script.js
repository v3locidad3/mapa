
const inputNome = document.getElementById("nomeFuncionario"); 
const btnAdicionar = document.getElementById("adicionar"); 
const btnRemover = document.getElementById("remover");
const selects = document.querySelectorAll("select");

let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

function atualizarSelects() {
 
  selects.forEach(select => select.innerHTML = "" );

  funcionarios.forEach(nome => {
    selects.forEach(select => {
      const option = document.createElement("option"); 
      option.textContent = nome; 
      option.value = nome; 
      select.appendChild(option); 
    });
  });
}


btnAdicionar.addEventListener("click", () => {
  const nome = inputNome.value.trim(); 

  if (nome && !funcionarios.includes(nome)) { 
    funcionarios.push(nome);
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
    atualizarSelects(); 
    inputNome.value = ""; 
    alert("Funcionário adicionado!");
  } else {
    alert("Nome inválido ou já adicionado!")
  }
});


btnRemover.addEventListener("click", () => {
  const nome = inputNome.value.trim();

  if (nome && funcionarios.includes(nome)){
    funcionarios = funcionarios.filter(func => func !== nome); 
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios)); 
    atualizarSelects();
    inputNome.value = "";
  } else {
    alert("Nome não encontrado!");
  }
});

atualizarSelects();
