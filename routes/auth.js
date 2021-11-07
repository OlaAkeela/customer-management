const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/auth')

router.post('/login', async function(req, res, next) {
  await login(req, res, next)
});

router.post('/register', async function(req, res, next) {
  await register(req, res, next)
});

module.exports = router;
