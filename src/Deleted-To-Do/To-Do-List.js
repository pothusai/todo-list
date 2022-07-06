import React, { useState} from "react";
import { Button, Header } from "semantic-ui-react";


const initialItems = []
for(let i=0; i < 5; i++){
    const newId = Math.floor(Math.random() * 100000)
    initialItems.push({id:newId,title:"title"+i})
}

const ToDoLists = () => {
    const [input, setInput] = useState('')
    const [editingInput,setEditingInput] = useState("")
    const [toDoLists, setToDoLists] = useState(initialItems)
    const [editing,setEditing] = useState(null)


    const handleChange = e => {
        setInput(e.target.value)
    } 


    const add = () => {
        setToDoLists([...toDoLists,input])
        setInput('')
    }

    const remove = (id) => {
        setToDoLists(prev => {
            prev = prev.filter(item => item.id !== id)
            return prev
        })
    }

    const check = (id) => {
        let editingItem = toDoLists.find(item => item.id === id)
        setEditing(editingItem)
        setEditingInput(editingItem)
    }

    const editingInputChange = e => {
        setEditingInput(e.target.value)
    }

    const onkeydown = e => {
        setInput("")
        add()
    }

    const handleUpdate = () => {
        setToDoLists(prev => {
            prev = prev.map((item,i) => {
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




    return (
        <div>
            <Header>
                <h1>Lists</h1>
                <h2>To-Do-Lists</h2>
            </Header>
            <br />
            <form>
            {toDoLists.map((item,i)=>{
                return(    
                    <div key={item.id}>
                        {editing && editing.id === item.id ? <>
                            <input value={editingInput} onChange={editingInputChange} placeholder=" any values" />
                            <button onClick={() => handleUpdate()} >update</button>
                        </> : 
                            <>
                                {item.title}    
                                <Button onClick={() => remove(item.id)}>Delete</Button>
                                <Button onClick={() => check(item.id)}>Edit</Button>
                            </>
                        }
                    </div>
                )
            })}
            </form>
            <input type="type" value={input} placeholder="any value" onChange={handleChange}
                onClick={onkeydown} />
            <Button onClick={() => add()}>Add</Button>
        </div>
    )
}

export default ToDoLists