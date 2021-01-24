import React, {Component} from "react";
import AddItems from "./components/addItems/addItems";
import TodoItems from "./components/TodoItems/TodoItems";
class App extends Component {
  state = {
    items:[]
  };
   
  deleteItems = (id)=>{
    let {items} = this.state;
    let newArray = items.filter( (item)=>item.id !== id);
      this.setState({
        items:newArray,
      });
  };
  addItems = (item)=>{
    let {items} = this.state;
    let len = items.length;
    item.id=len? ((items[len-1].id) + 1) : 1
    items.push(item);
    this.setState({
      items:items,
    })
  };

  render(){
    
    return (
      <div className="App main">
        <h2>TODOLIST App</h2>
        
          <TodoItems items = {this.state.items} deleteItems = {this.deleteItems}/>
          <AddItems addItems = {this.addItems}/>
        
      </div>
    );
  }
 
}

export default App;
