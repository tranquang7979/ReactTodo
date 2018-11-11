import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
        <button 
            className={`btn ${this.props.styleName} btn-min`}
            onClick={this.props.click} >
            {this.props.children}
        </button>
      );
  }
}

export default Button;
