const path = require('path');
const express = require('express');

const User = require('./models').User;
const Topic = require('./models').Topic;
const Message = require('./models').Message;

const app = express();
const db = require('./models');
const PORT = process.env.PORT || 9000;
const bp = require('body-parser');
app.use(bp.urlencoded());

app.use(express.static('public'));


app.get('/api/users/:id', (req,res)=>{
   
    var userID = parseInt(req.params.id)
    User.findById(userID)
    .then((users) => {
        res.json(users); 
    })
    .catch((err) => {
        console.log(err);
    });
});

app.route('/api/users')
    .get((req, res) => {
        console.log('trouble')
        User.findAll()
            .then((users) => {
                res.json(users); 
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
                    console.log('we posted name')
                    res.json(users);
                })
            .catch((err) => {
                console.log(err)
            });
    });


    app.route('/api/topics')
    .get((req, res) => {
        Topic.findAll()
            .then((topics) => {
                res.json(topics);   
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .post((req, res) => {
        console.log('posting', req.body)
        Topic.create({
                name: req.body.name
            })
                .then((topics) => {
                    console.log('we posted topic')
                    res.json(topics);
                })
            .catch((err) => {
                console.log(err)
            });
    });


    app.route('/api/messages')
    .get((req, res) => {
        Message.findAll()
            .then((messages) => {
                res.json(messages);
                
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .post((req, res) => {
        console.log('posting', req.body)
        Message.create({
                body: req.body.body
            })
                .then((messages) => {
                    console.log('we posted messages')
                    res.json(messages);
                })
            .catch((err) => {
                console.log(err)
            });
    });



    app.get('*', (req, res) => {
        res.sendFile('index.html', {
            root: path.join(__dirname, '/public')
        });
    });
    




const server = app.listen(PORT, () => {
    db.sequelize.sync()
    console.log(`Running on ${PORT}`);
});
