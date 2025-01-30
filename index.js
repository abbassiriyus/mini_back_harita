// server.js
const express = require('express');
const pool = require('./db');
const userRouter = require('./routes/userRoutes');
const locationRouter = require('./routes/LocationRoutes'); // Yangi routerni import qilish
require('dotenv').config();

const app = express();
app.use(express.json());

// Routerni qo'shish
app.use('/users', userRouter);
app.use('/locations', locationRouter); // Yangi routerni qo'shish

// Serverni ishga tushirish
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});