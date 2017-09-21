const path = require('path');
const express = require('express');

const User = require('./models').User;
const Topic = require('./models').Topic;
const Message = require('./models').Message;

const app = express();
const db = require('./models');
const PORT = process.env.PORT || 9000;
const bp = require('body-parser');
app.use(bp.json({
    extended: true
}));

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
        User.findAll({
            include: [
                {
                  model: Topic,
                  as: "Topics"
                }
              ]
        })
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
        .then(() => {
            User.findAll()
            .then((users)=>{
                res.json(users);
            })
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
                name: req.body.name,
                created_by: req.body.created_by
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
        let body = req.body.body
        console.log('this is the bodu',body)
        let author_id = parseInt(req.body.author_id)
        let topic_id = parseInt(req.body.topic_id)
        console.log('OUR author id',author_id)
        console.log('OUR TOPICS', topic_id)
        Message.create({
                body,
                topic_id,
               author_id
            })
                .then((messages) => {
                    console.log('we posted messages')
                    res.json(messages);
                })
            .catch((err) => {
                console.log(err)
            });
    });


    app.put('/api/topics/:id', (req, res) => {
        console.log('lets put it in!!! ')
        var topicId = parseInt(req.params.id);
        Topic.findById(topicId)
          .then((topics) => {
            console.log('topic stff',req.params.id)
            Topic.update({
                name:req.body.name
            },{
                where: {
                  id:req.params.id
                }
            }) 

            .then((topics) => {
                console.log('we posted topic')
                res.json(topics);
            })
        
        })
      });

      app.get('/api/messages/latest',(req,res) =>{
          console.log('testing get')
          Message.findAll({
              include: [
                  {
                     model: Topic,
                     as: 'Topic'
                 }
                ],
               order:[
                  [ 'createdAt','DESC']
               ]
          })
          .then((users) => {
              console.log("here are", users)
            res.json(users); 
        })
        .catch((err) => {
            console.log(err);
        });
      });




    app.get('*', (req, res) => {
        res.sendFile('index.html', {
            root: path.join(__dirname, '/public')
        });
    });
    




const server = app.listen(PORT, () => {
    db.sequelize.sync({
       

    })
    console.log(`Running on ${PORT}`);
});
