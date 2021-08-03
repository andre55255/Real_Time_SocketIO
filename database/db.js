const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/chat', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB is connected');
}).catch(err => {
    console.log('Connection failed with MongoDB'+err);
});

module.exports = mongoose;