import React, { Component } from 'react';
import Button from './controls/Button';
import { ToDoContext } from './context/ToDoContext';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ItemName: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ ItemName: event.target.value });
    }

    render() {
        return (
            <ToDoContext.Consumer>
                {({ insertItem }) => (
                    <div className="Header">
                        <h3>Todo App</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="text"
                                            placeholder="Enter todo name here"
                                            value={this.state.ItemName}
                                            onChange={this.handleChange}
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter'){
                                                    insertItem(this.state.ItemName);
                                                    e.preventDefault();
                                                }
                                            }}   />
                                    </td>
                                    <td><Button styleName="btn-blue btn-min" click={() => { insertItem(this.state.ItemName); }}>Add</Button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </ToDoContext.Consumer>
        );
    }
}

export default Header;
