const { Sequelize } = require('../config/database');
const sequelize = require('../config/database');

const smsModel = sequelize.define('sms', {
    sender: {
        type: Sequelize.INTEGER,
    },
    receiver: {
        type: Sequelize.INTEGER
    },
    message: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    msgId: {
        type: Sequelize.INTEGER
    }
});

module.exports = smsModel;
