import React,{useState} from "react";
import { Button } from "semantic-ui-react";

const Form = (props) => {
    const [input, setInput] = useState('')



    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const add = () =>{
        props.add(input) 
        setInput("")
    }
    const onKeyDown = e =>{
        if(e.key === 'Enter'){
            props.add()   
        }
    }


    return (
        <div>
            <input type="text" value={input}  placeholder=" any values" onChange={handleChange}
                onKeyDown={onKeyDown} />
            <Button onClick={() => add()}>Add</Button>
        </div>
    )
}

export default Form