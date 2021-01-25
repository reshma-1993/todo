import React, { Component } from "react";
import Checkbox from './Checkbox';

 
class TodoItems extends Component {

  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {    
    return (
      <li>
        <Checkbox
          label={item.text}
          handleCheckboxChange={this.props.delete}
          value={item.key}
          key={item.key}
        />
      </li>
    );
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