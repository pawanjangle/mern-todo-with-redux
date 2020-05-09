const express = require( 'express' );
const app = express(  );
const mongoose = require( 'mongoose' );
const bodyparser = require( 'body-parser' );
const cors = require( 'cors' );
app.use( express.json(  ) );
app.use( bodyparser.urlencoded( {extended: false} ) );
app.use( cors(  ) );
const todo = require( './models/todo' );
const db = "mongodb+srv://pawanjangle:adgjmp100@cluster0-y3cvx.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect( db, {useNewUrlParser: true, useUnifiedTopology: true} ).then( (  ) =>console.log( "connected to mongodb database" ) ).catch( err =>console.log( "Database connection error", err ) );
const todoRouter = require( './routes/todo' );
app.use( "/api/todo", todoRouter);
// Production
if (process.env.NODE_ENV === 'production') { // Set static folder
app.use(express.static('client/build')); app.get('*', (req, res) => { res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html')); });};
const PORT = process.env.PORT || 5000;
app.listen( PORT, ( err ) =>{
if( err ){
console.log( "error", err);
}
else{
console.log( "express server is listening on port ", PORT )
}
} )