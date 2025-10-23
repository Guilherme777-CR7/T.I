// Lista inicial de afazeres
let listaDeAfazeres = ["Comprar pão", "Estudar JavaScript", "Lavar louça"];

// Elementos da página
const ul = document.getElementById("listaAfazeres");
const info = document.getElementById("info");
const input = document.getElementById("novoAfazer");

// Função para renderizar a lista
function renderizarLista() {
  ul.innerHTML = "";
  listaDeAfazeres.forEach((tarefa, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${tarefa}</span>
      <button onclick="removerItem(${index})">🗑️</button>
    `;
    ul.appendChild(li);
  });
  info.textContent = `Total de afazeres: ${listaDeAfazeres.length}`;
}

// Adicionar novo afazer
document.getElementById("adicionarBtn").addEventListener("click", () => {
  const novo = input.value.trim();
  if (novo) {
    listaDeAfazeres.push(novo);
    input.value = "";
    renderizarLista();
  } else {
    alert("Digite uma tarefa antes de adicionar!");
  }
});

// Remover item específico
function removerItem(index) {
  listaDeAfazeres.splice(index, 1);
  renderizarLista();
}

// Botões de controle
document.getElementById("ordenarBtn").addEventListener("click", () => {
  const listaOrganizada = [...listaDeAfazeres].sort();
  listaDeAfazeres = listaOrganizada;
  renderizarLista();
});

document.getElementById("inverterBtn").addEventListener("click", () => {
  listaDeAfazeres.reverse();
  renderizarLista();
});

document.getElementById("removerInicioBtn").addEventListener("click", () => {
  const removido = listaDeAfazeres.shift();
  alert(`Afazer removido do início: ${removido}`);
  renderizarLista();
});

document.getElementById("removerFimBtn").addEventListener("click", () => {
  const removido = listaDeAfazeres.pop();
  alert(`Afazer removido do final: ${removido}`);
  renderizarLista();
});

// Renderiza a lista inicial
renderizarLista();
