require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(routes);

 db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}!`);
  });
 });
