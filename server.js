const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const dbMessage = require('./database/models/message');
const { setMessage } = require('./database/controllers/message');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});


io.on('connection', socket => {
    console.log('Socket connected: '+socket.id);

    dbMessage.find({})
        .then(objMessages => {
            socket.emit('previousMessages', objMessages);
        }).catch(err => {
            socket.emit('previousMessages', { error: 'Error mongoDB' });
        });

    socket.on('sendMessage', message => {
        setMessage(message);

        socket.broadcast.emit('receivedMessage', message);
    });
});

server.listen(8081);