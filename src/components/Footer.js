import React, { Component } from 'react';
import Button from './controls/Button';
import { ToDoContext } from './context/ToDoContext';

class Footer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        activeButton: 0 //0: button filter ALL / 1: button filter DONE / 2: button filter ACTIVE
      };
  
    }
 
    render() {
        return (
            <ToDoContext.Consumer>
                {({ toggleAll, toggleSelected, filter }) => (
                    <div className="Footer">
                        <div>
                            <ul className="list">
                                <li>
                                    <Button styleName="btn-blue" 
                                            click={() => { toggleAll(); }}>
                                        Toggle All
                                    </Button>
                                </li>
                                <li>
                                    <Button styleName={this.props.selectedItems === 0 ? "btn-default" : "btn-blue"}  
                                            click={() => { toggleSelected(); }}
                                            disabled={this.props.selectedItems === 0}>
                                        Toggle Selected
                                    </Button>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul className="list">
                                <li>Filter</li>
                                <li>
                                    <Button styleName={this.state.activeButton === 0 ? "btn-green" : "btn-default"} 
                                            click={() => { this.setState({activeButton : 0}); filter("All"); }}>
                                        All
                                    </Button>
                                </li>
                                <li>
                                    <Button styleName={this.state.activeButton === 1 ? "btn-green" : "btn-default"} 
                                            click={() => { this.setState({activeButton : 1}); filter("Done"); }}>
                                        Done
                                    </Button>
                                </li>
                                <li>
                                    <Button styleName={this.state.activeButton === 2 ? "btn-green" : "btn-default"} 
                                            click={() => { this.setState({activeButton : 2}); filter("Active"); }}>
                                        Active
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </ToDoContext.Consumer>
        );
    }
}

export default Footer;
