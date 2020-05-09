const mongoose = require( 'mongoose' );
const todoschema = new mongoose.Schema( {
name: {
			type: String,
			required: true
},
added_date: {
type: Date,
default: Date.now
}
}  );
module.exports = mongoose.model( "todo", todoschema)