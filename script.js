// Selecionar os elementos do HTML nescessários
const inputNome = document.getElementById("nomeFuncionario"); // Pega o valor do input text com o id "nomeFuncionario" como valor da variavel
const btnAdicionar = document.getElementById("adicionar"); // botão para adcionar nomes.
const btnRemover = document.getElementById("remover"); // botão para remover nomes.
const selects = document.querySelectorAll("select"); // seleciona todos os elementos <select> do HTML

// Funcção para carregar o array do localStorage ou criar array vazio se  não existe um.
let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

// Atualizar todos os <select> com as opções do array.
function atualizarSelects() {
  // Limpar todas as opções dos selects.
  selects.forEach(select => select.innerHTML = "" );

  // Adicionar as opções do array em cada <select>.
  funcionarios.forEach(nome => {
    selects.forEach(select => {
      const option = document.createElement("option"); //cria uma nova tag option.
      option.textContent = nome; // Define o texto dda  opção como o nome do funcionário.
      option.value = nome; // Define o valor da opção como o nome do funcionário.
      select.appendChild(option); // Adiciona a opção ao <select>.
    });
  });
}

// Função para adicionar nomes.
btnAdicionar.addEventListener("click", () => {
  const nome = inputNome.value.trim(); // Obtém o valor do campo de entrada.

  if (nome && !funcionarios.includes(nome)) { // Verifique se o nome já existe no array.
    funcionarios.push(nome); // Adiciona  o nome ao array.
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));// Salva a array atualizada.
    atualizarSelects(); // Atualiza os <selects> com as novas opções.
    inputNome.value = ""; // Limpa o campo de entrada.
    alert("Funcionário adicionado!"); // mensagem de confirmação.
  } else {
    alert("Nome inválido ou já adicionado!")
  }
});

// Função para remover nome.
btnRemover.addEventListener("click", () => {
  const nome = inputNome.value.trim();

  if (nome && funcionarios.includes(nome)){ // Verifica se o nome já existe.
    funcionarios = funcionarios.filter(func => func !== nome); // Remove o valor do array.
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios)); // Atualiza o localStorage.
    atualizarSelects();
    inputNome.value = "";
  } else {
    alert("Nome não encontrado!");
  }
});

atualizarSelects();
