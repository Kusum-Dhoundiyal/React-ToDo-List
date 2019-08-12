import React, { Component } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
class TodoList extends Component {
  state = {
    todos: []
  };

  addTodos = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };
  render() {
    return <div><TodoForm onSubmit ={this.addTodos}/>
    {this.state.todos.map(todo => (
      <Todo key={todo.id} toggleComplete ={()=> this.toggleComplete(todo.id)} todo ={todo}/>
    ))}
    </div>
  }
}
export default TodoList