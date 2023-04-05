const express = require('express');
const { sequelize } = require('./models');
let cors = require('cors')
const bcrypt = require('bcrypt')
const logger = require('morgan')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const { secret } = require('./config/config')


//routes
const guests = require('./routes/api/guests')
const messages = require('./routes/api/messages')

const app = express();

app.use(express.json());
app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, 'public')));

// cors
app.use(cors({ origin: true, credentials: true }));

// use routes
app.use('/guests', guests)
app.use('/messages', messages)

const PORT = 5001; // port number
app.listen({ port: PORT }, async () => {
  console.log(`Server up on http:localhost:${PORT}`);
  await sequelize.authenticate(); // checks db password etc
  console.log('Database connected');
});