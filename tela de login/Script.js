// script.js

// --- PÁGINA DE LOGIN ---
if (document.getElementById('loginForm')) {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // impede o envio do formulário

    const usuario = document.getElementById('usuario').value.trim();

    // Salva o nome no navegador
    localStorage.setItem('usuarioLogado', usuario);

    // Redireciona para a página de boas-vindas
    window.location.href = 'inicio.html';
  });
}

// --- PÁGINA DE BOAS-VINDAS ---
if (document.getElementById('mensagem')) {
  const nomeUsuario = localStorage.getItem('usuarioLogado');
  const mensagem = document.getElementById('mensagem');

  if (nomeUsuario) {
    // Mensagem personalizada
    mensagem.textContent = `🎉 Bem-vindo, ${nomeUsuario}!`;
  }

  // Botão "Sair"
  const sairBtn = document.getElementById('sairBtn');
  sairBtn.addEventListener('click', () => {
    localStorage.removeItem('usuarioLogado');
  });
}