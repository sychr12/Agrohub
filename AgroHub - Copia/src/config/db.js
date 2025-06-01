// src/config/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234', // Altere conforme seu MySQL
  database: 'agrohub'
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Erro ao conectar ao banco de dados:', err.message);
    return;
  }
  console.log('✅ Conectado ao banco de dados MySQL com sucesso!');
});

module.exports = connection;
