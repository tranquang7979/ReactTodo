import React, { Component } from 'react';
import Item from './Item';
import { CSSTransitionGroup } from 'react-transition-group';

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
            <CSSTransitionGroup component="ul"
                className="list"
                transitionName="todo-animate"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                {this.renderData()}
            </CSSTransitionGroup>

        );
    }

}

export default List;
