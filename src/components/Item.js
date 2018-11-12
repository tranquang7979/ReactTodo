import React, { Component } from 'react';
import Checkbox from './controls/Checkbox';
import Button from './controls/Button';
import { ToDoContext } from './context/ToDoContext';

class Item extends Component {
  render() {
    return (      
      <ToDoContext.Consumer>
        {({ items, deleteItem, updateStatus, selectItem }) => (
          <li onClick={() => { selectItem(this.props.children); }} 
              className={`${this.props.children.Selected ? 'selected' : ''}`}>
            <div>
              <Checkbox change={() => { updateStatus(this.props.children); }}
                        checked={this.props.children.Done}>
                {this.props.children.Name}
              </Checkbox>
            </div>
            <div>
              <Button click={() => { deleteItem(this.props.index); }}
                      styleName="btn-red no-min">
                X
            </Button>
            </div>
          </li>
        )}
      </ToDoContext.Consumer>
    );
  }

}

export default Item;
