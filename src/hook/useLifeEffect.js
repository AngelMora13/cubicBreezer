import { useCallback, useContext, useEffect } from "react"

import StartPlay from "context/startPlayContext";

import debounce from "just-debounce-it";

const lifeBG = ["red","red","red","red"]

const MAKE_LIFES = {
    0:(setLife,heal)=>{
        if(heal===0){
            lifeBG.fill("black")
            return
        }
    },
    1:(setLife,heal)=>{
        if(heal===0){
            lifeBG.fill("black")
            lifeBG[3]="red"
            return
        }
        setLife(life=>life+heal)
        for(let i=1;i<=heal;i++){
            lifeBG.reverse()
            const background = lifeBG.findIndex((life)=>life==="black")
            lifeBG[background]="red"
            lifeBG.reverse()
        }
    },
    2:(setLife,heal)=>{
        if(heal===0){
            lifeBG.fill("black")
            lifeBG[2]="red"
            lifeBG[3]="red"
            return
        }
        setLife(life=>life+heal)
        for(let i=1;i<=heal;i++){
            lifeBG.reverse()
            const background = lifeBG.findIndex((life)=>life==="black")
            lifeBG[background]="red"
            lifeBG.reverse()
        }
    },
    3:(setLife,heal)=>{
        if(heal===0){
            lifeBG.fill("red")
            lifeBG[0]="black"
            return
        }
        setLife(4)
        lifeBG.fill("red")
    },
    4:(setLife,heal)=>{        
        lifeBG.fill("red")
        return
    }
}

export default function useLifeEffect(){
    const {method, setPlayerLife,playerLife, bossLifes,isStart} = useContext(StartPlay);

    
    const loseLifes = useCallback((damage) =>{
        for(let i=1;i<=damage;i++){
            const background = lifeBG.findIndex(bg=>bg==="red")
            lifeBG[background]="black"
        }
        setPlayerLife(life=>{
            life=life-damage
            if(life<0){
                return life=0
            }else{
                return life
            }
        })
    },[setPlayerLife])

    const healLife = useCallback((heal)=>{
        if(playerLife===4){
            return
        }
        if(heal===4){
            setPlayerLife(4)
            lifeBG.fill("red")
            return
        }
        MAKE_LIFES[playerLife](setPlayerLife,heal)

        
    },[playerLife,setPlayerLife])

    useEffect(debounce(function (){
        if(method.heal<=-1){
            return setTimeout(()=>loseLifes((method.heal*(-1))),500)
        }
        if(method.heal>=1){
            console.log("heal")
            return healLife(method.heal)
        }
    },2000),[method,loseLifes,healLife])

    useEffect(function (){
        if(playerLife<=0 || bossLifes<=0){            
            return setTimeout(()=>lifeBG.fill("red"),500)
        }
    },[playerLife,bossLifes])

    useEffect(function (){
        if(!isStart){
            MAKE_LIFES[playerLife](setPlayerLife,0)
        }
    },[isStart,playerLife,setPlayerLife])

    return {lifeBG}
}