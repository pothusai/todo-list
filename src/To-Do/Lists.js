import React, { useState } from "react";
import { Button } from "semantic-ui-react";



const intialItems = []
for(let i=0;i<5;i++){
    const newId = Math.floor(Math.random() * 1000000)
    intialItems.push({id:newId,title:"title"+i})
}
const Lists = (props) => {


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

    const editingInputChange = e =>{
        setEditingInput(e.target.value)
    }

    const handleUpdate = props =>{
        setToDoLists(prev=>{
            prev = prev.map((item,i)=>{
                if(item.id === editing.id){
                    item.title = editingInput
                }
                return props.item
            })
            return prev
        })
        setEditing(null)
        setEditingInput("")

    }


    return (
        <div>
            {toDoLists.map((item,i)=>{
                return(
                    <div key={item.id}>
                        {editing && editing.id === item.id ? <>
                            <input value={editingInput} onChange={editingInputChange} placeholder=" any values" />
                            <button onClick={() => handleUpdate()} >update</button>
                        </> : 
                            <>
                                {item.title}    
                                <Button onClick={() => remove(props.item)}>Delete</Button>
                                <Button onClick={() => check(props.item)}>Edit</Button>
                            </>
                        }
                    </div>
                )
            })}
        </div>
    )
}



export default Lists