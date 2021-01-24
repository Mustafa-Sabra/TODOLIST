import React from "react";
import "./TodoItems.css" 

function TodoItems(props) {
    let {items, deleteItems} = props;
    let myItems = items.length? (items.map( (item) =>{
         return (
            <div key= {item.id} className="content">
               <span>{item.name}</span>
               <span >{item.age}</span>
               <span className="x" onClick = { ()=>deleteItems(item.id)}>&times;</span>
            </div>
    )    
    }) ): (<p>There are no items to show</p>)
    
        return(
        <div className="all">
            <div className="heading">
               <span className="cat">Name</span>
               <span className="cat">Age</span>
               <span className="cat">Action</span>
            </div>
            {myItems}
        </div>
        
        );
};
export default TodoItems;