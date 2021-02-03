const router = require('express').Router();
const smsCtrl = require('../controller/smsSending')

router.route('/smsSending').post(smsCtrl.smssending)

router.route('/fetchOutGoingMsg').get(smsCtrl.outGoingMsg)

router.route('/fetchIncomingMsg').get(smsCtrl.incomingMsg)

router.route('/incomingById').get(smsCtrl.incomingMsgById)

router.route('/fecthReplay').get(smsCtrl.fetchReplay)

module.exports = router;