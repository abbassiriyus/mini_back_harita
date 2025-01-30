// routes/userRouter.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const router = express.Router();

// Foydalanuvchini yaratish
router.post('/', async (req, res) => {
  const { login, parol } = req.body;
  const hashedPassword = await bcrypt.hash(parol, 10);
  const result = await pool.query(
    'INSERT INTO users (login, parol) VALUES ($1, $2) RETURNING *',
    [login, hashedPassword]
  );
  res.json(result.rows[0]);
});

// Foydalanuvchilar ro'yxatini olish
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT id, login, time_create, time_update FROM users');
  res.json(result.rows);
});

// Foydalanuvchini yangilash
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { login, parol } = req.body;
  const hashedPassword = await bcrypt.hash(parol, 10);
  const result = await pool.query(
    'UPDATE users SET login = $1, parol = $2, time_update = current_timestamp WHERE id = $3 RETURNING *',
    [login, hashedPassword, id]
  );
  res.json(result.rows[0]);
});

// Foydalanuvchini o'chirish
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM users WHERE id = $1', [id]);
  res.json({ message: 'User deleted' });
});

// Login API
router.post('/login', async (req, res) => {
  const { login, parol } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE login = $1', [login]);
  const user = result.rows[0];

  if (user && (await bcrypt.compare(parol, user.parol))) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;