import React, { useCallback, useContext, useEffect, useState } from "react";
import StartPlay from "./startPlayContext";

const Context = React.createContext({});

export function BossProvider({ children }) {
    const {isStart} = useContext(StartPlay)
    const [isActionBoss1, setIsActionBoss1] = useState({
        isAction: false,
        method: "",
    });
    const [isActionBoss2, setIsActionBoss2] = useState({
        isAction: false,
        method: "",
    });
    const [isActionBoss3, setIsActionBoss3] = useState({
        isAction: false,
        method: "",
    });

    const resetBoss = useCallback(()=>{
        setIsActionBoss1({isAction: false,method: ""})
        setIsActionBoss2({isAction: false,method: ""})
        setIsActionBoss3({isAction: false,method: ""})
    },[])

    useEffect(()=>{
        if(!isStart){
            resetBoss()
        }
    },[isStart,resetBoss])
    return (
        <Context.Provider
            value={{
                isActionBoss1,
                setIsActionBoss1,
                isActionBoss2,
                setIsActionBoss2,
                isActionBoss3,
                setIsActionBoss3,
                resetBoss
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default Context;
