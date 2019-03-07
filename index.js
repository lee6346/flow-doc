const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const keys = require('./config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());


if(['production', 'ci'].includes(process.env.NODE_ENV)){
  app.use(express.static('client-web/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client-web', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port`, PORT);
});