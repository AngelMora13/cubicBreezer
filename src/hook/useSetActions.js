import { useContext, useEffect, useRef } from "react";

import useActionBar from "hook/useActionBar";
import StartPlay from "context/startPlayContext";
import Player from "context/playerContext"

export default function useSetActions() {
  const {
    action1,
    action2,
    action3,
  } = useActionBar();
  
  const {setIsAttack,level} = useContext(StartPlay);

  const {
    isAction1,
    setIsAction1,
    isAction2,
    setIsAction2,
    isAction3,
    setIsAction3    
  } = useContext(Player);
  

  const widthBar1 = useRef(0);
  const widthBar2 = useRef(0);
  const widthBar3 = useRef(0);

  useEffect(() => {
    if (!action1) {
      widthBar1.current=0
      widthBar2.current=0
      widthBar3.current=0
      return
    }
    if (isAction1.isAction) {
      return 
    }
    const timeSpeed=2000-(150*(level-1))
    const incrementWidth=timeSpeed.toFixed(0)/40
    const firstBarWidth = document.getElementById("action1").clientWidth;
    const actionWidth = parseInt(firstBarWidth) / timeSpeed.toFixed(2);
    const timer = setInterval(() => {
      widthBar1.current += actionWidth * incrementWidth.toFixed(0);
    }, incrementWidth.toFixed(2));
    const othertimer = setTimeout(() => {
      clearInterval(timer);
      setIsAction1({ isAction: true, method: "none" });
    }, timeSpeed.toFixed(2));

    return () => {
      clearInterval(timer);
      clearTimeout(othertimer);
    };
  }, [action1, isAction1, setIsAction1,level]);

  useEffect(() => {
    if (!action2) {
      return
    }
    if (isAction2.isAction) {
      return 
    }
    const timeSpeed=2000-(150*(level-1))
    const incrementWidth=timeSpeed.toFixed(0)/40
    const firstBarWidth = document.getElementById("action2").clientWidth;
    const actionWidth = parseInt(firstBarWidth) / timeSpeed.toFixed(2);
    const timer = setInterval(() => {
      widthBar2.current += actionWidth * incrementWidth;
    }, incrementWidth);
    const othertimer = setTimeout(() => {
      clearInterval(timer);
      setIsAction2({ isAction: true, method: "none" });
    }, timeSpeed.toFixed(2));

    return () => {
      clearInterval(timer);
      clearTimeout(othertimer);
    };
  }, [action2, isAction2, setIsAction2,level]);

  useEffect(() => {    
    if (!action3) {
      return
    }
    if (isAction3.isAction) {
      setIsAttack(true)
      return 
    }
    const timeSpeed=2000-(150*(level-1))
    const incrementWidth=timeSpeed.toFixed(0)/40
    const firstBarWidth = document.getElementById("action3").clientWidth;
    const actionWidth = parseInt(firstBarWidth) / timeSpeed.toFixed(2);
    const timer = setInterval(() => {
      widthBar3.current += actionWidth * incrementWidth;
    }, incrementWidth);
    const othertimer = setTimeout(() => {
      clearInterval(timer);
      setIsAction3({ isAction: true, method: "none" });
    }, timeSpeed.toFixed(2));

    return () => {
      clearInterval(timer);
      clearTimeout(othertimer);
    };
  }, [action3, isAction3, setIsAction3,setIsAttack,level]);

  return { widthBar1, widthBar2, widthBar3 }
}
