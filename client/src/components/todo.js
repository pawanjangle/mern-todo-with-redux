import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTodos, addTodo, deleteTodo } from '../actions/todoActions';
class Todo extends React.Component{
state = {}
componentDidMount(  ){
this.props.getTodos()
}
render(  ){
const {todos} = this.props.todo;
const handleAddTodo = ( e ) =>{
const todo = prompt( "Enter a New Todo", "" );
const newTodo =  {
name: todo
} 
this.props.addTodo( newTodo );
}
const handleDelete = id =>{
this.props.deleteTodo( id )
}
return( 
<div style ={{ margin: "10px",
						 			border: "2px solid #ec"}}>
		<button className ="btn btn-primary" onClick = { handleAddTodo}>Add Todo</button>				 			
						 			
<Table hover responsive striped bordered>
<tbody>
{todos.map( ( todo ) =>{
return(
<tr key = {todo._id}>
<td> {todo.name} </td>
<td> <Button variant = "dark" onClick = {(  ) =>handleDelete( todo._id )}>Delete</Button></td>
</tr>)
} )}
</tbody>
</Table>
</div>

 )
}
}
Todo.propTypes = {
getTodos: PropTypes.func.isRequired,
todo: PropTypes.object.isRequired
}
const mapStateToProps = ( state ) =>({
todo: state.todo

})
export default connect( mapStateToProps, {getTodos, addTodo, deleteTodo})(Todo);