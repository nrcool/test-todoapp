import React from 'react'
import ToDoneItem from "./ToDoneItem"

export default function ToDonesContainer(props) {

   /*  store props in variable */
   const todones = props.items;

 /*    map through the items array and return list component */
     const toDoNesItems= todones.map(el=>{
        return ( <ToDoneItem  item={el} key={el.text}/> )
            })

    return (
        <div className="todones-container">
            <h3>BACKLOG</h3> 
            {toDoNesItems}           
        </div>
    )
}
