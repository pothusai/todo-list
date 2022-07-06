import React from "react"
import { Button } from "semantic-ui-react"

const Item = props => {
    let { item, editing,editingInput } = props
    return (
        <div key={item.id}>
            {editing && editing.id === item.id ? <>
                <input value={editingInput} onChange={props.editingInputChange} placeholder=" any values" />
                <button onClick={() => props.handleUpdate()} >update</button>
            </> :
                <>
                    {item.title}
                    <Button onClick={() => props.remove(props.item)}>Delete</Button>
                    <Button onClick={() => props.check(props.item.id)}>Edit</Button>
                </>
            }
        </div>
    )


}

export default Item