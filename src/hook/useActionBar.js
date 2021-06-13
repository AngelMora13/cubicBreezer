import { useContext, useEffect, useState } from "react"
import StartPlay from "context/startPlayContext"

export default function useActionBar(){
    const {isStart,level} = useContext(StartPlay)
    const [action1,setAction1] = useState(false)
    const [action2,setAction2] = useState(false)
    const [action3,setAction3] = useState(false)
    const [actionBoss1,setActionBoss1] = useState(false)
    const [actionBoss2,setActionBoss2] = useState(false)
    const [actionBoss3,setActionBoss3] = useState(false)
    
    useEffect(function (){
        if(!isStart){
            setAction1(false)
            setAction2(false)
            setAction3(false)
            setActionBoss1(false)
            setActionBoss2(false)
            setActionBoss3(false)
            return
        }
        const timer1 = (4200-(150*(level-1)))
        const timer2 = timer1+(2000-(150*(level-1)))
        const timer3 = timer2+(2000-(150*(level-1)))
        const timer4 = timer3+(2000-(150*(level-1)))
        const timer5 = timer4+(2000-(150*(level-1)))
        const timer6 = timer5+(2000-(150*(level-1)))
        //boss Interval
        const intervalBoss1 = setInterval(()=>{
            setActionBoss1(action=>action=true)
        },timer1)
        const intervalBoss2 = setInterval(()=>{
            setActionBoss2(action=>action=true)
        },timer3)
        const intervalBoss3 = setInterval(()=>{
            setActionBoss3(action=>action=true)
        },timer5)
        //player interval
        const interval1 = setInterval(()=>{
            setAction1(action=>action=true)
        },timer2)
        const interval2 = setInterval(()=>{
            setAction2(action=>action=true)
        },timer4)
        const interval3 = setInterval(()=>{
            setAction3(action=>action=true)
        },timer6)
        return () => {
            clearInterval(intervalBoss1)
            clearInterval(intervalBoss2)
            clearInterval(intervalBoss3)

            clearInterval(interval1)
            clearInterval(interval2)
            clearInterval(interval3)
        }
    },[isStart,level])

    return {action1,action2,action3,actionBoss1,actionBoss2,actionBoss3}
}