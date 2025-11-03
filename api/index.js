import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Transaction from './models/Transaction.js';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req,res) => {
    res.json('body: test ok');
});
 
app.post('/api/transaction', async(req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const {name,description,datetime,price} = req.body;
    const transction = await Transaction.create({
        name, description, datetime, price
    });
    res.json(transction);
});

app.get('/api/transactions', async(req, res) =>{
    await mongoose.connect(process.env.MONGO_URL); //connecting to database
    const transactions = await Transaction.find();
    res.json(transactions);
})

app.listen(4000);

