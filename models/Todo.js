const mongoose = require ('mongoose')
const { Schema } = mongoose;
// schema is a class you can use to make model available 
// const Schema = mongoose.Schema

const todoSchema = new Schema({
  	task: String,
  	dueDate: { type: Date, required: true }, 
  	complete: { type: Boolean, default: false }
});

mongoose.model( 'todos', todoSchema );
//nameing the todoSchema table as 'todos'

