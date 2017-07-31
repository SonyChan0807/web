
const mongoose = require('mongoose');
const mysql = require('mysql');


require('dotenv').config({ path: 'variables.env' });
// Connect to our Database and handle an bad connections
console.log(process.env.DATABASE)
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`${err.message}`);
});

// models (build ORM (Object Relational Mapping) models for all tables(RDB) and collections(MongoDB))
require('./models/mobile01');
require('./models/textcloud');
require('./models/radar');


const app = require('./app');
app.set('port', process.env.PORT || 4200);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
