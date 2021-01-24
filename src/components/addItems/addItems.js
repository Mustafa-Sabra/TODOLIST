import React, {Component} from "react";
import "./addItems.css"
class AddItems extends Component{
state = {
    id: "",
    name: "",
    age: "",
};
handleSubmit = (e)=>{
    e.preventDefault();
    if(e.target.name.value === "" || e.target.age.value === "" ){
        return false;
    }else{
        this.props.addItems(this.state);
        this.setState({
            name:"",
            age:"",
            id:"",
        })
    }
    
}
handleChange =(e)=>{
        this.setState({
            [e.target.id]:e.target.id ==="age"?parseInt(e.target.value): e.target.value,
        })
    
  
}
render(){
    return(
        <div>
            <form className="form" onSubmit={this.handleSubmit}>
              <input id="name" type="text" placeholder="Enter Your Name..." value={this.state.name} onChange={this.handleChange}></input>
              <input id="age" type="number"  placeholder="Enter Your Age..." value={this.state.age} onChange={this.handleChange}></input>
              <input type="submit" value="ADD TODO"></input>
            </form>
        </div>
    )
}
}
export default AddItems;