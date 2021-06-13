import React, { useEffect, useState, useContext, useCallback } from "react"
import {LifeContainer, Life,HeartContainer, Heart, LevelContainer} from "./styled"

import StartPlay from "context/startPlayContext";

import debounce from "just-debounce-it"


function LifeBossMeter(){
    const [vibration, setVibration] = useState(false)
    const {method,setMethod, bossLifes, setBossLifes,level} = useContext(StartPlay);

    const makeLifes = useCallback(() =>{
        const numberLifes=[]
        for(let i=0;i<bossLifes;i++){
            numberLifes.push(<Life key={i}/>)
        }
        return numberLifes
    },[bossLifes])

    const loseLifes = useCallback(
        ()=>{             
            setBossLifes(life=>life-method.damage)
            setVibration(true)
            setTimeout(()=>setVibration(false),1000)
            return
            },[setBossLifes,method])

    useEffect(debounce(function (){
        if(bossLifes>0 && method.type==="attack"){
            return loseLifes()
        }
    },2000),[bossLifes,method,setMethod,loseLifes])
    return (
        <>
        <LifeContainer life={bossLifes} anim={vibration}>
        <HeartContainer life={bossLifes}>
        <Heart/>
        </HeartContainer>
            
            {
                makeLifes().map((life)=>life)
            }
            <LevelContainer>Lvl: {level}</LevelContainer>
        </LifeContainer>
        </>
    )
}
export default React.memo(LifeBossMeter)