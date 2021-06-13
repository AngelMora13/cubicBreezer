import React,{useRef, useState, useContext, useEffect} from "react"
import {AudioPlay} from "./styled"
import StartPlay from "context/startPlayContext";
import BossSong from "static/media/Yuri.mp3"

function MediaAudio ({Song, left, top}) { 
    const {level} = useContext(StartPlay);
    const [isPlay, setIsPlay] = useState(false)
    const audio = useRef()
    const media = {
        id:1,
        audio: Song,
        formato:"audio/mpeg",
        paused:"fas fa-volume-mute",
        play:"fas fa-volume-up"
    }    

    const autoPlay = () =>{
        if(!audio.current.paused){
            audio.current.pause()  
            setIsPlay(false)
        }else{
            audio.current.play() 
            setIsPlay(true)
        }
    }
    useEffect(()=>{
        if(level===10 && !audio.current.paused){
            audio.current.src=BossSong
            audio.current.play()
            return
        }
        if(level===10 && audio.current.paused){
            audio.current.src=BossSong
            return
        }
    },[level])

    return (
        <>
        <audio key={media.id} ref={audio} loop={true}>
            <source src={media.audio} type={media.formato}/>
        </audio>
        {
            isPlay
            ? <AudioPlay onClick={()=>autoPlay()} className={media.play} left={left} top={top} />
            : <AudioPlay onClick={()=>autoPlay()} className={media.paused} left={left} top={top} />
        }
        </>
    )
}

export default React.memo(MediaAudio)