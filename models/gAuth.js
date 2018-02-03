const mongoose = require ('mongoose')
const { Schema } = mongoose;
// schema is a class you can use to make model available 
// const Schema = mongoose.Schema

const gAuthSchema = new Schema({
  googleId: String,
  name: String,
  alive: {type: Number, default: 0},
  dead: {type: Number, default: 0}
});

mongoose.model( 'users', gAuthSchema );
//nameing the todoSchema table as 'todos'

