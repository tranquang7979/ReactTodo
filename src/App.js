import React, { Component } from 'react';
import { ToDoContext } from './components/ToDoContext';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './css/App.css';
import './css/custom-controls.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.selectItem = (item) => {
      this.setState(state => ({ items: this.select(item, state) }));
    };

    this.insertItem = (name) => {
      this.setState(state => ({ items: this.addItem(name, state) }));
    };

    this.deleteItem = (index) => {      
      this.setState(state => ({ items: this.removeItem(index, state) }));
    };

    this.updateStatus = (item) => {
      this.setState(state => ({ items: this.updateItem(item, state) }));
    };
    
    this.toggleAll = () => {
      this.setState(state => ({ items: this.toggle(true, state) }));
    };

    this.toggleSelected = () => {      
      this.setState(state => ({ items: this.toggle(false, state) }));
    };

    this.filter = (status) => {
      this.setState(state => ({ items: this.filerData(status, state) }));
    };
    
    this.state = {
      items: [],
      selectItem: this.selectItem,
      insertItem: this.insertItem,
      deleteItem: this.deleteItem,
      updateStatus: this.updateStatus,
      toggleAll: this.toggleAll,
      toggleSelected: this.toggleSelected,
      filter: this.filter
    };

  }

  removeItem(index, state){
    if (index > -1){
      state.items.splice(index, 1);
      //console.log(JSON.stringify(state.items));
      //state.items[index].Deleted = true;
    }
    return state.items;
  }

  addItem(name, state){
    var newItem = {Name: name, Done: false, Deleted: false, Selected: false};
    state.items.unshift(newItem);
    return state.items;
  }

  updateItem(item, state){
    var index = state.items.indexOf(item);
    state.items[index].Done = !item.Done;
    return state.items;
  }

  select(item, state){
    //var index = state.items.indexOf(item);
    //state.items[index].Selected = !item.Selected;
    return state.items;
  }

  toggle(isAll, state){
    var items = state.items;
    if (isAll){
      items = state.items
            .filter(item => !item.Deleted)
            .map((item, index) =>{ item.Done = !item.Done; return item; });      
    }
    else{
      items = state.items
            .filter(item => !item.Deleted && item.Selected)
            .map((item, index) =>{ item.Done = !item.Done; return item; });
    }
    return items;
  }

  filterData(status, state){
    // switch(status){
    //   case -1: // show all item, include 2 status 'DONE' and 'ACTIVE'
    //     return 
    // }
    return state.items;
  }

  render() {
    return (
      <ToDoContext.Provider value={this.state}>
        
        <div className="App">

          <Header />

          <div className="Body">
            <List data={this.state.items} />
          </div>

          <Footer />

        </div>

      </ToDoContext.Provider>
    );
  }

  componentDidMount(){
    this.setState({
      items: this.context.items
    });
  }
}
App.contextType = ToDoContext;

export default App;
