import { useContext, useEffect, useRef } from "react";

import useActionBar from "hook/useActionBar";
import Boss from "context/bossContext"
import StartPlay from "context/startPlayContext";

export default function useBossSetActions() {
  const {
    actionBoss1,
    actionBoss2,
    actionBoss3,
  } = useActionBar();
  const {
    isActionBoss1,
    setIsActionBoss1,
    isActionBoss2,
    setIsActionBoss2,
    isActionBoss3,
    setIsActionBoss3
  } = useContext(Boss);
  const {level} = useContext(StartPlay)

  const widthBossBar1 = useRef(0);
  const widthBossBar2 = useRef(0);
  const widthBossBar3 = useRef(0);
  const setWidth = useRef(0)
  
  const setWidthBoss = (width) =>{
      width=parseInt(width)
      width = [width/1.3,width/2, width/3,width/4,width/5,width/6]
      
      setWidth.current = width[Math.floor(Math.random()*3)]

  }

  useEffect(() => {    
    if (!actionBoss1) {
      widthBossBar1.current=0
      widthBossBar2.current=0
      widthBossBar3.current=0
      setWidth.current=0
      return;
    }
    if (isActionBoss1.isAction) {
      return 
    }
    const timeSpeed=2000-(150*(level-1))
    const incrementWidth=timeSpeed.toFixed(0)/40
    const firstBarWidth = document.getElementById("action1").clientWidth;
    setWidthBoss(firstBarWidth)
    const actionWidth = parseInt(firstBarWidth) / timeSpeed.toFixed(2);
    const timer = setInterval(() => {
      widthBossBar1.current += actionWidth * incrementWidth.toFixed(0);
      if(widthBossBar1.current>=setWidth.current){
          widthBossBar1.current = setWidth.current
          if(Math.random()<=0.7){
            setWidth.current=0
            setIsActionBoss1({isAction:true,method:"attack"})
          }else{
            setWidth.current=0
            setIsActionBoss1({isAction:true,method:"defence"})
          }
      }
    }, incrementWidth.toFixed(2));
    return () => {
      clearInterval(timer);
    };
  }, [actionBoss1, isActionBoss1, setIsActionBoss1,level]);

  useEffect(() => {
    if (!actionBoss2) {
      return;
    }
    if (isActionBoss2.isAction) {
      return 
    }
    const timeSpeed=2000-(150*(level-1))
    const incrementWidth=timeSpeed.toFixed(0)/40
    const firstBarWidth = document.getElementById("action1").clientWidth;
    setWidthBoss(firstBarWidth)
    const actionWidth = parseInt(firstBarWidth) / timeSpeed;
    const timer = setInterval(() => {
      widthBossBar2.current += actionWidth * incrementWidth.toFixed(0);
      if(widthBossBar2.current>=setWidth.current){
          widthBossBar2.current = setWidth.current
          if(Math.random()<=0.7){
            setWidth.current=0
            setIsActionBoss2({isAction:true,method:"attack"})
          }else{
            setWidth.current=0
            setIsActionBoss2({isAction:true,method:"defence"})
          }
      }
    }, incrementWidth.toFixed(2));
    return () => {      
      clearInterval(timer);
    };
  }, [actionBoss2, isActionBoss2, setIsActionBoss2,level]);

  useEffect(() => {
    if (!actionBoss3) {
      return;
    }
    if (isActionBoss3.isAction) {
      return 
    }    
    const timeSpeed=2000-(150*(level-1))
    const incrementWidth=timeSpeed.toFixed(0)/40
    const firstBarWidth = document.getElementById("action1").clientWidth;
    setWidthBoss(firstBarWidth)
    const actionWidth = parseInt(firstBarWidth) / timeSpeed;
    const timer = setInterval(() => {
      widthBossBar3.current += actionWidth * incrementWidth.toFixed(0);
      if(widthBossBar3.current>=setWidth.current){
          widthBossBar3.current = setWidth.current
          if(Math.random()<=0.7){
            setWidth.current=0
            setIsActionBoss3({isAction:true,method:"attack"})
          }else{
            setWidth.current=0
            setIsActionBoss3({isAction:true,method:"defence"})
          }
      }
    }, incrementWidth.toFixed(2));
    return () => {
      setWidthBoss(firstBarWidth)
      clearInterval(timer);
    };
  }, [actionBoss3, isActionBoss3, setIsActionBoss3,level]);


  return { widthBossBar1,widthBossBar2,widthBossBar3 }
}
