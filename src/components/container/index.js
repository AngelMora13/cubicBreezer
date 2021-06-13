import React, { useEffect, useState, useContext } from "react"
import {Wrap} from "./styled"
import StartPlay from "context/startPlayContext";
const Arr={
    "left":"right",
    "right":"left"
  }
function Container ({children}) {
    const [direction,setDirection] = useState("left")
    const {method, level} = useContext(StartPlay);
    useEffect(()=>{
        if (method.type==="avoid"){
          setDirection(direction=>Arr[direction])
        }      
      },[method])
      
    return <Wrap direction={direction} fondo={level}>{children}</Wrap>      
}
export default React.memo(Container)