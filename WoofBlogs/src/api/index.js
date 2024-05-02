const express = require('express')
const cors = require('cors');

//db
const mongoose = require('mongoose');

//user schema
const User = require('./model/user')

//hashing password
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10);

//dotenv
require('dotenv').config();

const app = express();

app.use(express.json())

//cors - connecting to server port and frontend port
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));


mongoose.connect(process.env.MONGO_URL)

app.post('/signup', async (req, res) => {
    const {username, email, password} = req.body;

    try{
        const user = await User.create({
            username,
            email,
            password:bcrypt.hashSync(password, bcryptSalt)
        })
        res.json(user)
    }catch(error){
        res.status(422).json(error)
    }
})

app.post('/login', async (req, res) => {
    const{email, password} = req.body;
    const userlog = await User.findOne({email});
    if(userlog) {
        const passwordFine = bcrypt.compareSync(password, userlog.password)
        if(passwordFine){
            res.json('pass ok')
        }
        else{
            res.status(422).json('pass not ok')
        }
    }else{
        res.json('not found')
    }
})

app.listen(5000, () => console.log("server started"));