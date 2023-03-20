const express = require('express');
const router = express.Router();

const guestsController = require('../../controllers/guests.controller');

router.get('/test', (req, res) => res.send('guest route testing'));
router.get('/', guestsController.getAllGuests);
router.post('/', guestsController.createGuest)

module.exports = router;