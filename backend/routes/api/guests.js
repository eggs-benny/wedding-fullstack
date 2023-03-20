const express = require('express');
const router = express.Router();

const guestsController = require('../../controllers/guests.controller');

router.get('/test', (req, res) => res.send('guest route testing'));
router.get('/', guestsController.getAllGuests);
router.get('/:uuid', guestsController.findGuest)
router.post('/', guestsController.createGuest)
router.delete('/:uuid', guestsController.deleteGuest)
router.put('/:uuid', guestsController.updateGuest)

module.exports = router;