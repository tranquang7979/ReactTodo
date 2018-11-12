import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    renderData() {
        if (this.props.data != null && this.props.data.length > 0) {
            var items = this.props.data
                                .filter(item => !item.Deleted && item.Visible)
                                .map((item, index) => {                                    
                                    return <Item key={index} index={index}>{item}</Item>
                                });
            return items;
        }
        return <li className="w-next">What should you do next ?</li>;
    }

    render() {
        return (
            <ul className="list">
                {this.renderData()}
            </ul>
        );
    }
    
}

export default List;
