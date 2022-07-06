import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Item from "./item";


const intialItems = []
for(let i=0;i<5;i++){
    const newId = Math.floor(Math.random() * 1000000)
    intialItems.push({id:newId,title:"title"+i})
}
const ToDoList = () => {
    const [input, setInput] = useState('')
    const [editingInput, setEditingInput] = useState('')
    const [toDoLists, setToDoLists] = useState(intialItems)
    const [editing, setEditing] = useState(null)

    // const handleChange = (e) => {
    //     setInput(e.target.value)
    // }   

    const add = (input) =>{
        const newId = Math.floor(Math.random() * 1000000)
        setToDoLists([...toDoLists,{id:newId,title:input}])
        setInput("")
    }

    const remove = (id) => {
        setToDoLists(prev=>{
            prev = prev.filter(item=> item.id !== id)
            return prev
        })
    }

    const check = (id) => {
        let editingItem = toDoLists.find(item=> item.id === id )
        setEditing(editingItem)
        setEditingInput(editingItem.title)
    }
    
    // const onKeyDown = e =>{
    //     if(e.key === 'Enter'){
    //         add()   
    //     }
    // }

    const editingInputChange = e =>{
        setEditingInput(e.target.value)
    }

    const handleUpdate = e =>{
        setToDoLists(prev=>{ 
            prev = prev.map((item,i)=>{
                if(item.id === editing.id){
                    item.title = editingInput
                }
                return item
            })
            return prev
        })
        setEditing(null)
        setEditingInput("")

    }
    
    console.log(toDoLists,editing,editingInput)
    //['a', 'v']
    // [{id:1,title:"a"},{id:2}]
    return (
        <div>
            <Header />
            {toDoLists.map(item=>{
                return(
                    <Item
                    editingInputChange={editingInputChange} remove={remove} check={check}
                        key={item.id} editing={editing} item={item} editingInput={editingInput} handleUpdate={handleUpdate}/>
                )
            })}
            <br />
            <Form add={add} />
        </div>
    )
}


export default ToDoList