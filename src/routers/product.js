const express = require('express');
const Router = express.Router();

Router.get('/detail', (req, res)=>{
  res.send('product detail')
})


module.exports = Router;