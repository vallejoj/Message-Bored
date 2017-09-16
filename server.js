const path = require('path');
const express = require('express');

const User = require('./models').User;

const app = express();
const db = require('./models');
const PORT = process.env.PORT || 9000;
const bp = require('body-parser');
app.use(bp.urlencoded());

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, '/public')
    });
});

app.route('/user')
    .get((req, res) => {
        User.findAll()
            .then((users) => {
                res.json(users);
                console.log('yippie')
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .post((req, res) => {
        console.log('posting', req.body)
        User.create({
                name: req.body.name
            })
                .then((users) => {
                    console.log('we posted')
                    res.json(users);
                })
            .catch((err) => {
                console.log(err)
            })
    })














const server = app.listen(PORT, () => {
    db.sequelize.sync()
    console.log(`Running on ${PORT}`);
});
