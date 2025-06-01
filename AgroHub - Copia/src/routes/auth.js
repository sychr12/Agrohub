const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota de registro
router.post('/registro', authController.registrar);

// Rota de login
router.post('/login', authController.login);


module.exports = router;
