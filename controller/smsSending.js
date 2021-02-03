const dotenv = require('dotenv');
const SMS = require('../models/sms.model');

dotenv.config();

const apiKey = '9a7989af7c10b40eb65a56074dc995a2'
const apiSecret = 'c84680e1d870ff60a2cfd5b0eed6025b'
// const apiKey = 'a7f4f671e3b5e6a4e0d7dc8c8edb0188'
// const apiSecret = 'd60e3d23adb1474fa755025344239818'
const smsglobal = require('smsglobal')(apiKey, apiSecret)

const smssending = async (req, res) => {
    try {
        var payload = {
            origin: '447537453118',
            destination: '447537453118',
            message: 'replay testing',
        }
        // United Kingdom
        console.log("Request", payload);
        smsglobal.sms.send(payload, function (error, response) {
            if (response) {
                // console.log('Response:', response.data ? response.data : response);
                console.log(response);
                res.status(200).send(response)
            }

            if (error) {
                res.status(400).send(error)
                console.log(error);
                // console.log('Error:', util.inspect(error, { showHidden: false, depth: null, colors: true }));
            }
            // console.log(response);
        })
        console.log("RequestData", req.query)
    } catch (e) {
        res.json('not send')
    }
}

const outGoingMsg = async (req, res) => {
    try {
        var promise = smsglobal.sms.getAll();
        console.log("Pro", promise)

        promise
            .then(function (response) {
                res.status(200).send(response)
                console.log(response)
            })
            .catch(function (error) {
                res.status(400).send(error)
                console.log(error)
            });
    } catch (e) {
        res.json('not send')
    }
}

const incomingMsg = async (req, res) => {
    try {
        var promise = smsglobal.sms.incoming.getAll();

        promise
            .then(function (response) {
                res.status(200).send(response)
                console.log(response)
            })
            .catch(function (error) {
                res.status(400).send(error)
                console.log(error)
            });
    } catch (e) {
        res.json('not send')
    }
}

const incomingMsgById = async (req, res) => {
    try {
        var id = '488963201'; //   488811371
        var promise = smsglobal.sms.incoming.get(id);

        promise
            .then(function (response) {
                console.log(response)
                // res.status(200).send(response)
            })
            .catch(function (error) {
                console.log(error)
                // res.status(400).send(error)
            });
    } catch (e) {
        res.json('not send')
    }
}

incomingMsgById()


const incoming = async (req, res) => {
    try {
        var payload = {
            from: 'India',
            to: '7046185571',
            msg: 'This is test1 msg',
            msgid: ''
        }

        smsglobal.sms.send(payload, function (error, response) {
            if (response) {
                // console.log('Response:', response.data ? response.data : response);
                console.log(response);
                res.status(200).send(response)
            }
            if (error) {
                res.status(400).send(error)
                console.log(error);
                // console.log('Error:', util.inspect(error, { showHidden: false, depth: null, colors: true }));
            }
            // console.log(response);
        })
    } catch (e) {
        // res.send('not send')
        console.log("Error", e)
    }
}

const fetchReplay = async (req, res) => {
    try {
        console.log("Request", req)
    } catch (e) {
        // res.send('not send')
        console.log("Error", e)
    }
}

module.exports = {
    smssending,
    outGoingMsg,
    incomingMsg,
    incomingMsgById,
    incoming,
    fetchReplay
}