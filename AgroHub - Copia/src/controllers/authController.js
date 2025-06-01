// src/controllers/authController.js
const db = require('../config/db');

// REGISTRO
exports.registrar = (req, res) => {
  const { nome_completo, email, senha, data_nascimento } = req.body;

  if (!nome_completo || !email || !senha || !data_nascimento) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
  }

  // Verifica se o e-mail já existe
  db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Erro ao verificar usuário:', err);
      return res.status(500).json({ mensagem: 'Erro no servidor.' });
    }

    if (results.length > 0) {
      return res.status(409).json({ mensagem: 'E-mail já cadastrado.' });
    }

    // Insere o novo usuário
    db.query(
      'INSERT INTO usuarios (nome_completo, email, senha, data_nascimento) VALUES (?, ?, ?, ?)',
      [nome_completo, email, senha, data_nascimento],
      (err, result) => {
        if (err) {
          console.error('Erro ao registrar:', err);
          return res.status(500).json({ mensagem: 'Erro no registro.' });
        }
        res.status(201).json({ mensagem: 'Usuário registrado com sucesso!' });
      }
    );
  });
};

// LOGIN
exports.login = (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: 'Informe e-mail e senha.' });
  }

  db.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], (err, results) => {
    if (err) {
      console.error('Erro no login:', err);
      return res.status(500).json({ mensagem: 'Erro no servidor.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ mensagem: 'Credenciais inválidas.' });
    }

    // Aqui você pode salvar o ID na sessão se desejar
    res.status(200).json({ mensagem: 'Login bem-sucedido!' });
  });
};
