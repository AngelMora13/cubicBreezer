import { useContext } from "react"

import Player from "context/playerContext"
import useActionBar from "hook/useActionBar"

export default function useSelectActions () {    
    const {action1,action2,action3} = useActionBar()
    const {isAction1,setIsAction1,isAction2,setIsAction2,
        isAction3,setIsAction3} = useContext(Player)
    
    const setTypeOfAction = (typeOfAction)=>{
        if(action1 && !isAction1.isAction){     
            setIsAction1({isAction:true,method:typeOfAction})
        }
        if(action2 && !isAction2.isAction){
            setIsAction2({isAction:true,method:typeOfAction})
        }
        if(action3 && !isAction3.isAction){
            setIsAction3({isAction:true,method:typeOfAction})
        }
    }
    const onAttack = ()=>{
        setTypeOfAction("attack")
        return
    }
    const onDefence = ()=>{
        setTypeOfAction("defence")
        return
    }
    const onAvoid = ()=>{
        setTypeOfAction("avoid")
        return
    }
    return {onAttack, onDefence, onAvoid}
}




