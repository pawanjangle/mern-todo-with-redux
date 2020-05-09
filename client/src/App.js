import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Todo from './components/todo';
import store from './store';
class App extends React.Component {

render(){
  return (
    <Provider store = { store }>
    <Todo/>
    </Provider>
  );
}
}
export default App;