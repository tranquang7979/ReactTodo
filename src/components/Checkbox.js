import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <label className="container">
        {this.props.children}
        <input type="checkbox" checked={this.props.checked} onChange={this.props.change}/>
        <span className="checkmark"></span>
      </label>
    );
  }
}

export default Checkbox;
