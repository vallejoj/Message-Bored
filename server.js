const path = require('path');
const express = require('express');

const app = express();
const db = require ('./models');
const PORT = process.env.PORT || 9000;
const bp = require('body-parser');
app.use(bp.urlencoded());

app.use(express.static('public'));

app.get('*', (req,res) =>{
    res.sendFile('index.html', {root: path.join(__dirname, '/public')});
  })

const server = app.listen(PORT, () =>{
    db.sequelize.sync()
    console.log(`Running on ${PORT}`);
  });
