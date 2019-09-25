const mongoose = require('mongoose');
 //Connecting to MongoDB


//Defining a Model
//Models are defined through the Schema interface.
 mongoose.connect('mongodb://localhost/customers_database');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const CustomerSchema= new Schema({
  
  name: String,
  age: Number,

});

//Accessing a Model
const Customer = mongoose.model('Customer', CustomerSchema);

module.exports=Customer;