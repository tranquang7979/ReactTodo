import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
import { ToDoContext } from './ToDoContext';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Done: false
    };

  }

  render() {
    return (
      <ToDoContext.Consumer>
        {({ items, deleteItem, updateStatus, selectItem }) => (
          <li onClick={() => { selectItem(this.props.children); }}>
            <div>
              <Checkbox change={() => {
                                  this.setState({ Done: !this.state.Done });
                                  updateStatus(this.props.children);
                                }}
                checked={this.state.Done}>
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

  componentDidMount() {
    this.setState({ Done: this.props.children.Done });
  }
}

export default Item;
