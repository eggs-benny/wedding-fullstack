const express = require('express'); // server
const { sequelize } = require('./models');
let cors = require('cors')

//routes
const guests = require('./routes/api/guests')

const app = express();

app.use(express.json());

// cors
app.use(cors({ origin: true, credentials: true }));

// add a guest
app.use('/guests', guests)

// // add a message
// app.post('/messages', async (req, res) => {
//   const { guestUuid, needsReply, content, reply } = req.body; // ensure all headers included here

//   try {
//     const guest = await Guest.findOne({ where: { uuid: guestUuid } });

//     const message = await Message.create({
//       needsReply,
//       content,
//       reply,
//       guestId: guest.id
//     });

//     return res.json(message);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json(error);
//   }
// });

// // get all messages
// app.get('/messages', async (req, res) => {
//   try {
//     const messages = await Message.findAll({ include: 'guest' });

//     return res.json(messages);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json(error);
//   }
// });

const PORT = 5001; // port number
app.listen({ port: PORT }, async () => {
  console.log(`Server up on http:localhost:${PORT}`);
  await sequelize.authenticate(); // checks db password etc
  console.log('Database connected');
});
