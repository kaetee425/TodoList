const mongoose = require ('mongoose')
const { Schema } = mongoose;
// schema is a class you can use to make model available 
// const Schema = mongoose.Schema

const gAuthSchema = new Schema({
  googleId: String,
  name: String,

});

mongoose.model( 'users', gAuthSchema );
//nameing the todoSchema table as 'todos'

