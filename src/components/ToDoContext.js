import React from 'react';

var toDoItems = [
  { Name: "Todo item 1", Done: false, Deleted: false, Selected: false },
  { Name: "Todo item 2", Done: false, Deleted: false, Selected: false },
  { Name: "Todo item 3", Done: true, Deleted: false, Selected: false },
  { Name: "Todo item 5", Done: false, Deleted: false, Selected: false },
  { Name: "Todo item 6", Done: false, Deleted: false, Selected: false },
  { Name: "Todo item 7", Done: true, Deleted: false, Selected: false },
  { Name: "Todo item 8", Done: true, Deleted: false, Selected: false },
  { Name: "Todo item 9", Done: false, Deleted: false, Selected: false }
];

export const ToDoContext = React.createContext(
  {
    items: toDoItems,
    selectItem: (item) => { },
    insertItem: (item) => { },
    deleteItem: (index) => { },
    updateStatus: (item) => { },
    toggleAll: () => { },
    toggleSelected: () => { },
    filter: (status) => { }
  }
);