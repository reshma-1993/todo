import React, { Component } from "react";
 
class TodoItems extends Component {

  createTasks(item) {
    return (<li onClick={() => this.delete(item.key)} 
             key={item.key}>{item.text}{item.key}</li>)
 }

 delete(key) {
  this.props.delete(key);
}
  constructor(props) {
      super(props);
   
      this.createTasks = this.createTasks.bind(this);
  }

 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;