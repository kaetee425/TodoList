const mongoose = require ('mongoose')
const { Schema } = mongoose;
// schema is a class you can use to make model available 
// const Schema = mongoose.Schema

const localSchema = new Schema({
  email: String,
  password: String,

});

mongoose.model( 'localusers', gAuthSchema );
//nameing the todoSchema table as 'todos'

