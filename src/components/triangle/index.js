import React, {useContext, useEffect} from "react"
import {Container, Lado, Base} from "./styled"

import StartPlay from "context/startPlayContext";


function Triangle () {    
    const {method,setMethod,playerLife,bossLifes,isStart} = useContext(StartPlay);

    useEffect(()=>{
        if(playerLife<=0 && bossLifes>0){
            setTimeout(()=>setMethod({type:"destroy", damage:0, heal:0}),1000) 
        }
        if(isStart){
            setMethod({type:"", damage:0, heal:0})
        }
    },[playerLife,isStart,setMethod,bossLifes])

    return (   
        <Container anim={method.type}>
            <Lado anim={method.type} background="blue" />
            <Lado anim={method.type} background="blue" />
            <Lado anim={method.type} background="blue" />
            <Lado anim={method.type} background="blue" />
            <Base anim={method.type} background="blue" />            
        </Container>
    )
}

export default React.memo(Triangle)