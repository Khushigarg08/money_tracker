const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/Transaction.js');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req,res) => {
    res.json('body: test ok');
});
 
app.post('/api/transaction', async(req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const {name,decsription,datetime,price} = req.body;
    const transction = await Transaction.create({
        name, decsription, datetime, price
    });
    res.json(transction);
});

app.get('/api/transactions', async(req, res) =>{
    await mongoose.connect(process.env.MONGO_URL); //connecting to database
    const transactions = await Transaction.find();
    res.json(transactions);
})

app.listen(4000);

