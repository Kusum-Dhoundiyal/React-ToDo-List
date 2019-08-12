import React, { Component } from 'react'
export default class TodoForm extends Component{
state = {
    text : '',
    id :1
};
handleChange =(event) =>{
 this.setState({
      [event.target.name]: event.target.value
    });
}
handleSubmit =(event) =>{
    event.preventDefault();
    this.props.onSubmit({
        id: this.state.id + 1,
        text:this.state.text,
        complete:false
    });
    this.setState({
        text: "",
        id: this.state.id + 1
      });
}
IncrementItem = () => {
    this.setState({ id:this.state.id + 1});
  }
render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          placeholder="Todo...."
          value={this.state.text}
          onChange={this.handleChange}
        />
         <button onClick={this.handleSubmit}>add todo</button>
        </form>
      </div>
    );
  }
}
