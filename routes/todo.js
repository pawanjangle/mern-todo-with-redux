const express = require( 'express' );
const router = express.Router(  );
const Todo = require( '../models/todo' );
router.get( "/", ( req, res ) =>{
Todo.find(  )
.sort( { date: -1} )
.then( todos => res.json( todos ) )
} );
router.post( "/", ( req, res ) =>{
const newTodo = new Todo( {
name: req.body.name
} );
newTodo.save(  ).then( todo => res.json( todo ) );
});
router.delete( "/:id", ( req, res ) =>{
Todo.findById( req.params.id ).then( todo=> todo.remove(  ).then( (  )=> res.json( {success: true} ) ) )
.catch( err => res.json( {success: false} ).status( 404 ) )
} );

module.exports = router;