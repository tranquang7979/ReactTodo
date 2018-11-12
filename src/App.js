import React, { Component } from 'react';
import { ToDoContext } from './components/context/ToDoContext';
import { select, addItem, removeItem, updateItem, toggle, filterData } from './components/biz-functions/todo-item';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './css/App.css';
import './css/custom-controls.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 200,
      items: [],
      selectItem: (item) => { this.setState(state => ({ items: select(item, state) })); },
      insertItem: (name) => { this.setState(state => ({ items: addItem(name, state) })); },
      deleteItem: (index) => { this.setState(state => ({ items: removeItem(index, state) })); },
      updateStatus: (item) => { this.setState(state => ({ items: updateItem(item, state) })); },
      toggleAll: () => { this.setState(state => ({ items: toggle(true, state) })); },
      toggleSelected: () => { this.setState(state => ({ items: toggle(false, state) })); },
      filter: (status) => { this.setState(state => ({ items: filterData(status, state) })); }
    };

    this.updateWindowDimensions = () => {
      var h = window.innerHeight - 260;
      if(window.innerWidth > 555)
        h += 60;
      this.setState({ height: h });
    }
  
  }

  render() {
    return (
      <ToDoContext.Provider value={this.state}>        
        <div className="App">
          <Header />
          <div className="Body" style={{height: this.state.height}}>
            <List data={this.state.items}/>
          </div>
          <div className="total">
            {this.state.items.length} items left 
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            {this.state.items.filter(x=>x.Done).length} completed items
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            {this.state.items.filter(x=>!x.Done).length} active items
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            {this.state.items.filter(x=>x.Selected).length} selected items
          </div>
          <Footer selectedItems={this.state.items.filter(x=>x.Selected).length}/>
        </div>
      </ToDoContext.Provider>
    );
  }

  componentWillMount(){
    this.updateWindowDimensions();
  }

  componentDidMount(){
    this.setState({ items: this.context.items });
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
}
App.contextType = ToDoContext;

export default App;