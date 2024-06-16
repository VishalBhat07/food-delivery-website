const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const foodRouter = require('./routes/foodRoute');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
const orderRouter = require('./routes/orderRoute');
require('dotenv').config();

// app config
const app = express();
const port = process.env.PORT || 4000; // Use process.env.PORT for Vercel deployment

// middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
  res.send('API Working');
});

module.exports = app; // Export your app for Vercel deployment
