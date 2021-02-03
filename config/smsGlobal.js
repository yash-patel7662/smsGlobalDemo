const dotenv = require('dotenv');

dotenv.config();

const smsglobal = () => ({
    apiKey: process.env.apiKey,
    apiSecret: process.env.apiSecret
})

module.exports = smsglobal