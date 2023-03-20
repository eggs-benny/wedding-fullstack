const express = require('express');
const router = express.Router();

const messagesController = require('../../controllers/messages.controller');

router.get('/test', (req, res) => res.send('message route testing'));
router.get('/', messagesController.getAllMessages);
// router.get('/:uuid', messagesController.findMessage)
router.post('/', messagesController.createMessage)
// router.delete('/:uuid', messagesController.deleteMessage)
// router.put('/:uuid', messagesController.updateMessage)

module.exports = router;