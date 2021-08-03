const dbMessage = require('../models/message');

function setMessage({ user, message }) {
    if (user && message) {
        dbMessage.create({ user, message })
            .then(obj => {
                return { user, message }
            }).catch(err => {
                return { error: err }
            })
    } else {
        return { error: 'Data not reported' };
    }
}

module.exports = {
    setMessage
}