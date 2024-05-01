const express = require('express');
const routes = express.Router();
const URL = require('../model/user')

routes.get('/', (req, res) => {
    if(!req.user) return res.redirect('login')
    const allDBuser = URL.find({ createdBy : req.user.id})
})