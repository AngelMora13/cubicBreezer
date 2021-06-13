import React, {useContext, useEffect} from "react"
import {Container, Lado,LadoSupInferior} from "./styled"

import StartPlay from "context/startPlayContext";

function Cubic () {
    const {methodBoss,setMethodBoss, bossLifes,isStart,bossBG} = useContext(StartPlay);
    
    useEffect(function (){
        if(bossLifes<=0){
            setTimeout(()=>setMethodBoss({type:"destroy", damage:0}),1000) 
        }
        if(isStart){
            setMethodBoss({type:"", damage:0})
        }
    },[isStart,bossLifes,setMethodBoss])

    return (
        <Container anim={methodBoss.type}>
            <Lado anim={methodBoss.type} background={bossBG} />
            <Lado anim={methodBoss.type} background={bossBG} />
            <Lado anim={methodBoss.type} background={bossBG} />
            <Lado anim={methodBoss.type} background={bossBG} />
            <LadoSupInferior anim={methodBoss.type} background={bossBG} />
            <LadoSupInferior anim={methodBoss.type} background={bossBG} />
        </Container>
    )
}

export default React.memo(Cubic)