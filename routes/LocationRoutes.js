// routes/locationRouter.js
const express = require('express');
const pool = require('../db');
const router = express.Router();

// Locationni yaratish
router.post('/', async (req, res) => {
  const {
    name,
    lng,
    amo_id,
    info,
    oldPrice,
    newPrice,
    type,
    tip,
    pasport,
    format,
    data,
    kolechtvo,
    vimos,
    prixod,
    tensport,
    svetafor,
    image,
    subcategory,
  } = req.body;

  const result = await pool.query(
    `INSERT INTO location (name, lng, amo_id, info, oldPrice, newPrice, type, tip, pasport, format, data, kolechtvo, vimos, prixod, tensport, svetafor, image, subcategory)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *`,
    [
      name,
      lng,
      amo_id,
      info,
      oldPrice,
      newPrice,
      type,
      tip,
      pasport,
      format,
      data,
      kolechtvo,
      vimos,
      prixod,
      tensport,
      svetafor,
      image,
      subcategory,
    ]
  );
  res.json(result.rows[0]);
});

// Locationni olish
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM location');
  res.json(result.rows);
});

// Locationni yangilash
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    name,
    lng,
    amo_id,
    info,
    oldPrice,
    newPrice,
    type,
    tip,
    pasport,
    format,
    data,
    kolechtvo,
    vimos,
    prixod,
    tensport,
    svetafor,
    image,
    subcategory,
  } = req.body;

  const result = await pool.query(
    `UPDATE location SET name = $1, lng = $2, amo_id = $3, info = $4, oldPrice = $5,
    newPrice = $6, type = $7, tip = $8, pasport = $9, format = $10, data = $11, 
    kolechtvo = $12, vimos = $13, prixod = $14, tensport = $15, svetafor = $16, 
    image = $17, subcategory = $18, time_update = current_timestamp WHERE id = $19 RETURNING *`,
    [
      name,
      lng,
      amo_id,
      info,
      oldPrice,
      newPrice,
      type,
      tip,
      pasport,
      format,
      data,
      kolechtvo,
      vimos,
      prixod,
      tensport,
      svetafor,
      image,
      subcategory,
      id,
    ]
  );
  res.json(result.rows[0]);
});

// Locationni o'chirish
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM location WHERE id = $1', [id]);
  res.json({ message: 'Location deleted' });
});

module.exports = router;