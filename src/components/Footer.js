import React, { Component } from 'react';
import Button from './Button';
import { ToDoContext } from './ToDoContext';

class Footer extends Component {
    constructor(props) {
      super(props);
  
      this.toggleAll = () => {
        console.log("Toggle all item");
      };
  
      this.toggleSelectedItems = () => {
        console.log("Toggle selected item");
      };
  
    }

    filter(status) {
        console.log("Filter: " + status);
    }
  
  render() {
    return (
        <ToDoContext.Consumer>
          {({ items, toggleAll, toggleSelected, filter }) => (
            <div className="Footer">
                <div>              
                    <ul className="list">
                        <li><Button styleName="btn-blue" click={this.toggleAll}>Toggle All</Button></li>
                        <li><Button styleName="btn-blue" click={this.toggleSelectedItems}>Toggle Selected</Button></li>
                    </ul>
                </div>

                <div>
                    <ul className="list">
                        <li>Filter</li>
                        <li><Button styleName="btn-green" click={()=>{this.filter("All")}}>All</Button></li>
                        <li><Button styleName="btn-default" click={()=>{this.filter("Done")}}>Done</Button></li>
                        <li><Button styleName="btn-default" click={()=>{this.filter("Active")}}>Active</Button></li>
                    </ul>
                </div>
            </div>
          )}
        </ToDoContext.Consumer>        
      );
  }
}

export default Footer;
