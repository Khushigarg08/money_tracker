import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Transaction from './models/Transaction.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB once
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get('/api/test', (req, res) => {
  res.json('body: test ok');
});

app.post('/api/transaction', async (req, res) => {
  try {
    const { name, description, datetime, price } = req.body;
    const transaction = await Transaction.create({ name, description, datetime, price });
    res.json(transaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add transaction" });
  }
});

app.get('/api/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
