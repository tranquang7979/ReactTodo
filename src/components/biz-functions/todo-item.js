
export const removeItem = (index, state) => {
  if (index > -1){
    state.items.splice(index, 1);
  }
  return state.items;
}

export const addItem = (name, state) => {
  var newItem = {Name: name, Done: false, Deleted: false, Selected: false, Visible: true};
  state.items.unshift(newItem);
  return state.items;
}

export const updateItem = (item, state) => {
  var index = state.items.indexOf(item);
  state.items[index].Done = !item.Done;
  return state.items;
}

export const select = (item, state) => {
  var index = state.items.indexOf(item);
  if(index !== -1)
    state.items[index].Selected = !item.Selected;
  return state.items;
}

export const toggle = (isAll, state) => {
  if (isAll){
    state.items.forEach((item, index) => {
        if(!item.Deleted) 
          state.items[index].Done = !state.items[index].Done;
    });      
  }
  else{
    state.items.forEach((item, index) => {
      if(!item.Deleted && item.Selected) 
        state.items[index].Done = !state.items[index].Done;
    });
  }
  return state.items;
}

export const filterData = (status, state) => {    
  switch(status.toUpperCase()){
    case "ACTIVE": // show items has status 'ACTIVE'
        state.items.forEach((item, index) => {
          state.items[index].Visible = false;
          if(!item.Deleted && !item.Done)
            state.items[index].Visible = true;
        });
        break;
    case "DONE": // show items has status 'DONE'
        state.items.forEach((item, index) => {
          state.items[index].Visible = false;
          if(!item.Deleted && item.Done)
            state.items[index].Visible = true;
        });
        break;
    case "ALL": // show all item, include 2 status 'DONE' and 'ACTIVE'
    default:
        state.items.forEach((item, index) => {
          if(!item.Deleted)
            state.items[index].Visible = true;
        });
        break;
  }
  return state.items;
}