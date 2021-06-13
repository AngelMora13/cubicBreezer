import React, { useCallback, useContext, useEffect, useState } from "react";
import StartPlay from "./startPlayContext";

const Context = React.createContext({});

export function PlayerProvider({ children }) {
    const {isStart} = useContext(StartPlay)
    const [isAction1, setIsAction1] = useState({ isAction: false, method: "" });
    const [isAction2, setIsAction2] = useState({ isAction: false, method: "" });
    const [isAction3, setIsAction3] = useState({ isAction: false, method: "" });

    const resetPlayer = useCallback(()=>{
        setIsAction1({ isAction: false, method: "" })
        setIsAction2({ isAction: false, method: "" })
        setIsAction3({ isAction: false, method: "" })
    },[])

    useEffect(()=>{
        if(!isStart){
            resetPlayer()
        }
    },[isStart,resetPlayer])
    return (
        <Context.Provider
            value={{
                isAction1,
                setIsAction1,
                isAction2,
                setIsAction2,
                isAction3,
                setIsAction3,
                resetPlayer
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default Context;
