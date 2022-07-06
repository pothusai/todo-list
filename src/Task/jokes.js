import React, { useEffect, useState } from "react";


function Jokes(){
    useEffect(()=>{
        fetch({
            url:'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10',
            method:"get",
            headers:{
                
            }
        })
    },[])
    return (
        <div>
            test
        </div>
    )
}

export default Jokes