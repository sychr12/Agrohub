async function registrarUsuario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;
  const dataNascimento = document.getElementById('dataNascimento').value;

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  const resposta = await fetch('/api/registro', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha, dataNascimento })
  });

  const resultado = await resposta.json();

  if (resposta.ok) {
    alert('Usuário registrado com sucesso!');
    window.location.href = '/login.html';
  } else {
    alert('Erro ao registrar: ' + resultado.message);
  }
}
