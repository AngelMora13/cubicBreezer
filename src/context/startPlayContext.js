import React, { useCallback, useEffect, useState } from "react";
import {useRoute} from "wouter"

const Context = React.createContext({});

const level_Life = [
    {level:4,background:"purple"},
    {level:5,background:"green"},
    {level:6,background:"yellow"},
    {level:7,background:"black,royalblue,white"},
    {level:9,background:"cyan"},
    {level:10,background:"red"},
    {level:11,background:"violet,orangered"},
    {level:13,background:"gray,purple"},
    {level:15,background:"violet,black"},
    {level:15,background:"transparent,transparent"}
]

export function StartPlayProvider({ children }) {
    const [isStart, setIsStart] = useState(false);
    const [isAttack, setIsAttack] = useState(false)
    const [level,setLevel] = useState(10)
    const [method, setMethod] = useState({type:"", damage:0, heal:0})
    const [methodBoss, setMethodBoss] = useState({type:"", damage:0})
    const [bossLifes, setBossLifes] = useState(level_Life[level-1].level);
    const [playerLife, setPlayerLife] = useState(4)
    const [bossBG, setBossBG] = useState(level_Life[level-1].background);
    const [match] = useRoute("/duel")

    const ResetActions = () =>{    
        setIsAttack(false)
        setIsStart(false)
        setMethod({type:"", damage:0, heal:0})
        setMethodBoss({type:"", damage:0})     
    }
    const ResetForMatch = useCallback(()=>{
        console.log("math")
        setIsAttack(false)
        setIsStart(false)
        setBossLifes(level_Life[level-1].level)          
        setPlayerLife(4)  
        setMethod({type:"", damage:0, heal:0})
        setMethodBoss({type:"", damage:0})  
    },[level])
    const saveData = useCallback(()=>{
        const memory = localStorage.getItem("cubic-breezer")
        if(memory && level===10){
            const winCount = memory.count+1
            const store = {level:level,count:winCount}
            localStorage.setItem("cubic-breezer",JSON.stringify(store))
            return
        }
        if(memory){
            const store = {level:level+1,count:memory.count}
            return localStorage.setItem("cubic-breezer",JSON.stringify(store))
        }else{
            const store = {level:level+1,count:0}
            return localStorage.setItem("cubic-breezer",JSON.stringify(store))
        }     
    },[level])

    const RestoreData = useCallback(()=>{
        const JsonMemory = localStorage.getItem("cubic-breezer")
        if(JsonMemory){
            const memory = JSON.parse(JsonMemory)
            setLevel(memory.level)
            setBossLifes(level_Life[memory.level-1].level)  
            setBossBG(level_Life[memory.level-1].background)
            setPlayerLife(4)
            return true
        }else{            
            return false
        }
    },[])
    
    const LevelUp = useCallback(()=>{
        if(level<10 && bossLifes<=0){
            setBossLifes(level_Life[level].level)  
            setTimeout(()=>setBossBG(level_Life[level].background),2000) 
            setPlayerLife(4)               
            setLevel((level)=>level+1)
            setTimeout(()=>{
                const save = window.confirm("Congratulations, you win :D \n want´s save?")
                if(save){
                    return saveData()
                }
                
            },1000)
        }else{
            setTimeout(()=>{
                const save = window.confirm("Congratulations, you win :D \n want´s save?")
                if(save){
                    return saveData()
                }
            },1000)
            setBossLifes(level_Life[level-1].level)          
            setPlayerLife(4)  
        }
    },[level,bossLifes,saveData])

    const BossLifeZero = useCallback(()=>{     
        ResetActions()             
        setTimeout(()=>LevelUp(),500)
    },[LevelUp])

    const PlayerLifeZero = useCallback(()=>{   
        ResetActions()
        setPlayerLife(4)
        setBossLifes(level_Life[level-1].level)     
    },[level])

    useEffect(()=>{
        if(bossLifes<=0){
            setTimeout(()=>BossLifeZero(),100)
        }
    },[bossLifes,BossLifeZero])

    useEffect(()=>{
        if(playerLife<=0){
            PlayerLifeZero()
        }
    },[playerLife,PlayerLifeZero])

    useEffect(()=>{
        if(!match){
            return ()=>ResetForMatch()
        }
    },[match,ResetForMatch])

    return (
        <Context.Provider
            value={{
                isStart,
                setIsStart,
                ResetActions,
                isAttack,
                setIsAttack,
                method,
                setMethod,
                methodBoss,
                setMethodBoss,
                level,
                LevelUp,
                bossLifes,
                setBossLifes,
                bossBG,
                playerLife,
                setPlayerLife,
                RestoreData                              
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default Context;
