// File to connect to databases
import mongoose from 'mongoose';
import Sequelize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

// MongoDB connection
// Will create a promise for asynchronous connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/basic_graphql_application');
// Create a schema to define the data model
const friendSchema = new mongoose.Schema({
  firstName: {
      type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  language: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String
  },
  contacts: {
    type: Array
  }
});
// Create a model using the schema
const Friends = mongoose.model('friends', friendSchema);

/* SQLite connection */
// Create the database
const sequelize = new Sequelize('database', null, null, {
  dialect: 'sqlite',
  storage: './aliens.sqlite'
});
// Create the schema
const Aliens = sequelize.define('aliens', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  planet: { type: Sequelize.STRING }
});

Aliens.sync({force: true})
  .then(() => {
    _.times(10, (i) => {
      Aliens.create({
        firstName: casual.first_name,
        lastName: casual.last_name,
        planet: casual.word
      })
    })
  })

export { Friends, Aliens };
