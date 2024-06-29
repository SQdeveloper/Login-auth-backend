const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')

require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const main = async ()=>{
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('Connected to MongoDB')
}

main().catch(err=>console.log(err))

app.use('/api/signup', require('./routes/signup'));
app.use('/api/signout', require('./routes/signout'));
app.use('/api/todos', require('./routes/todos'));
app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/login'));
app.use('/api/refreshtoken', require('./routes/refreshToken'));

app.get('/', (req,res)=>{
    res.send('hello')
})

app.listen(port, ()=>{
    console.log('Server is runnig on port: ', port);
})