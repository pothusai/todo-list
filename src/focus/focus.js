import React, { useRef, useEffect } from "react";





const Focus = () => {
    const inputRef = useRef(null)

    useEffect(c => {
        inputRef.current.focus()
    })


    return (
        <div>
            <input ref={inputRef} />
        </div>
    )
}


export default Focus