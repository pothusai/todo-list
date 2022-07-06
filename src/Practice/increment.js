import React, { useState } from "react";

const Increment = () => {

    const [count, setCount] = useState(0)
    const set = e =>{
        localStorage.setItem("mydata","a")
        sessionStorage.setItem("mydata","a")
    }
    return (
        <div>
            {count}
            <button onClick={() => setCount(count+1)}>inc</button>
            <button onClick={() => setCount(count-1)}>dec</button>
            <button onClick={set} >set</button>
        </div>
    )
}


export default Increment

