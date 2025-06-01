// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /api/usuarios
router.get('/usuarios', userController.listarUsuarios);

// GET /api/usuarios/:id
router.get('/usuarios/:id', userController.buscarUsuarioPorId);

// PUT /api/usuarios/:id
router.put('/usuarios/:id', userController.atualizarUsuario);

// DELETE /api/usuarios/:id
router.delete('/usuarios/:id', userController.deletarUsuario);

module.exports = router;
