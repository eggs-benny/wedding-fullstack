const express = require('express');
const router = express.Router();

const guestsController = require('../../controllers/guests.controller');

// // Middleware to check if the token is valid
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) {
//     return res.sendStatus(401);
//   }

//   jwt.verify(token, secret, (err, user) => {
//     if (err) {
//       return res.sendStatus(403);
//     }
//     req.user = user;
//     next();
//   });
// };

// router.use(authenticateToken);
router.get('/', guestsController.getAllGuests);
router.get('/:uuid', guestsController.findGuest);
router.post('/', guestsController.createGuest);
router.delete('/:uuid', guestsController.deleteGuest);
router.put('/:uuid', guestsController.updateGuest);

module.exports = router;
