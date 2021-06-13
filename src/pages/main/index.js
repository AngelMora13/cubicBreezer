import React,{useContext} from "react"
import {Container, LinkButtom, Head} from "./styled"
import {useLocation} from "wouter"
import StartPlay from "context/startPlayContext";
import MediaAudio from "components/audio"
import MeteorSmash from "components/meteors"

import audio from "static/media/soundbay.mp3"

function MainPage () {    
    const {RestoreData} = useContext(StartPlay);
    const [location,setLocation] = useLocation()

    const setNewdata = () =>{
        const isStoredData = RestoreData()
        if(isStoredData){
            alert("Enjoy, you have data saved :D")
            return setLocation("/duel")
        }else{
            return alert("copy not found. Enjoy, you can start again :D")
        }
    }
    return (
        <Container>           
        <MediaAudio Song={audio} top={5} left={85}/>   
            <LinkButtom to="/duel" r={255} g={35} b={86} a={0.7}>Go to Combat Page</LinkButtom>
            <LinkButtom to="/" r={255} g={76} b={35} a={0.7} onClick={()=>setNewdata()}>Recovery Data</LinkButtom>
            <LinkButtom to="/guide" r={133} g={3} b={187} a={0.7}>How to Play</LinkButtom>
            <Head>Cubic-Breezer</Head>
            <MeteorSmash/>  
        </Container>
    )
}
export default React.memo(MainPage)