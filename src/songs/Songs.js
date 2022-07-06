import React, { useState,useRef } from "react";
import { Button } from "semantic-ui-react";

import './Songs.css';

const mainSongs = [
    {id:1,name:"a"},
    {id:2,name:"b"},
    {id:3,name:"c"},
    {id:4,name:"d"},
    // {id:5,name:"e"},
    // {id:6,name:"f"},
    // {id:7,name:"g"},
    // {id:8,name:"h"},
    // {id:9,name:"i"},
    // {id:10,name:"j"},
    // {id:11,name:"k"},
    // {id:12,name:"l"},
    // {id:13,name:"m"},
    // {id:14,name:"n"},
    // {id:15,name:"o"},
]

// const temp = setInterval(()=>{
//     console.log("print")
// },2000)
// console.log(temp)
// setTimeout(()=>{
//     clearInterval(temp)
// },6000)

const Songs = () => {

    const [activeId,setActiveSong] = useState(null)
    const [isRepeat,setRepeat] = useState(true)
    const [playing, setPlaying] = useState()
    const a = useRef(null)

    const playSongs = e =>{
        setActiveSong(1)
        setRepeat(false)
        a.current = setInterval(()=>{
            setActiveSong(prev=> {
                return prev + 1
            })
        },2000)
        
        // setTimeout(()=>{
        //     clearInterval(a.current)
        //     setRepeat(true)

        // },((mainSongs.length*2000)-1))
    }
    console.log( "activeId", activeId)

    const HandlePlayList = e => {
        clearInterval(a.current)
    }
    
    let activeSongInfo = mainSongs.find(song=>{
        if(song.id === ((activeId-1)%4)+1){
            return true
        }
    })
    
    return (
        <div className="song-client" >
            <React.Fragment>
                <Button onClick={playSongs}>Play</Button>
                <Button  disabled={!isRepeat} >Repeat</Button>
                <Button onClick={HandlePlayList}>Stop</Button>
            </React.Fragment>
            <div>
                {mainSongs.map(song=>{
                    return(
                        <div key={song.id} > {song.name} </div>
                    )
                })}
            </div>
            { activeSongInfo && <div> playng : {activeSongInfo.name} </div>}
        </div>
    )
}


export default Songs