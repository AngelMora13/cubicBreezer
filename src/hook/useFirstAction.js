import { useCallback, useContext, useEffect, useState } from "react";

import StartPlay from "context/startPlayContext";
import Player from "context/playerContext"
import Boss from "context/bossContext"

import useSetActions from "hook/useSetActions";
import useBossSetActions from "hook/useBossSetActions";

const BossDamage = {
    boss:{
        attack:{
            player:{
                attack:1,
                defence:0,
                avoid:0,
                none:2
            }
        },
        defence:{
            player:{
                attack:0,
                defence:0,
                avoid:1,
                none:0
            }
        }
    }
}
const PlayerDamage = {
    boss:{
        attack:{
            player:{
                attack:2,
                defence:0,
                avoid:0,
                none:0
            }
        },
        defence:{
            player:{
                attack:2,
                defence:0,
                avoid:0,
                none:0
            }
        }
    }
}
const PlayerHeal = {
    boss:{
        attack:{
            player:{
                attack:-2,
                defence:0,
                avoid:2,
                none:-2
            }
        },
        defence:{
            player:{
                attack:0,
                defence:0,
                avoid:-2,
                none:0
            }
        }
    }
}
export default function useFirstAction() {
    const { ResetActions, isAttack, setIsAttack, setMethod, setMethodBoss, bossLifes,isStart } = useContext(StartPlay);   
    const { isAction1, isAction2, isAction3, resetPlayer } = useContext(Player);
    const { isActionBoss1, isActionBoss2, isActionBoss3, resetBoss } = useContext(Boss);    

    const { widthBar1, widthBar2, widthBar3 } = useSetActions();
    const { widthBossBar1, widthBossBar2, widthBossBar3 } = useBossSetActions();

    const [secondAction, setSecondAction] = useState(false)
    const [thirdAction, setThirdAction] = useState(false)

    const resetAll = useCallback(() => {
        setSecondAction(false)
        setThirdAction(false)
        ResetActions()
        resetPlayer()
        resetBoss()
    }, [ResetActions,resetPlayer,resetBoss])

    const makeAction = useCallback(({ diference, typeOfAttack, typeOfBossAttack }) => {
        if(bossLifes<=0){
            setSecondAction(false)
            setThirdAction(false)
            return 100
        }
        const bossDamage = BossDamage.boss[typeOfBossAttack].player[typeOfAttack]
        const playerDamage = PlayerDamage.boss[typeOfBossAttack].player[typeOfAttack]
        const playerHeal = PlayerHeal.boss[typeOfBossAttack].player[typeOfAttack]

        if (diference > 15) {
            setMethodBoss({type:typeOfBossAttack, damage:bossDamage});
            if(playerHeal===2){
                setMethod({type:typeOfAttack, damage:playerDamage/2, heal:0});
            }else{
                setMethod({type:typeOfAttack, damage:playerDamage/2, heal:playerHeal/2});
            }            
            setTimeout(() => {
                setMethod({type:"", damage:0, heal:0});
                setMethodBoss({type:"", damage:0});
            }, 2000);
            return 3000
        }

        if (diference < -15) {
            setMethodBoss({type:typeOfBossAttack, damage:bossDamage});
            if(playerHeal===2){
                setMethod({type:typeOfAttack, damage:playerDamage/2, heal:0});
            }else{
                setMethod({type:typeOfAttack, damage:playerDamage/2, heal:playerHeal/2});
            }  
            setTimeout(() => {
                setMethod({type:"", damage:0, heal:0});
                setMethodBoss({type:"", damage:0});
            }, 2000);
            return 3000
        }

        if (diference <= 15 && diference >= -15) {
            setMethodBoss({type:typeOfBossAttack, damage:bossDamage});
            setMethod({type:typeOfAttack, damage:playerDamage, heal:playerHeal});
            setTimeout(() => {
                setMethod({type:"", damage:0, heal:0});
                setMethodBoss({type:"", damage:0});
            }, 2000);
            return 3000
        }
        return 4500
    }, [bossLifes,setMethod, setMethodBoss])

    const thirdAttack = useCallback(() => {
        setThirdAction(false)
        const diference = (widthBar3.current - widthBossBar3.current);
        const typeOfAttack = isAction3.method || "none";
        const typeOfBossAttack = isActionBoss3.method || "attack";
        const timer = makeAction({ diference, typeOfAttack, typeOfBossAttack })
        setTimeout(() => resetAll(), timer)
    },[widthBar3, widthBossBar3, isAction3, isActionBoss3,
        makeAction, resetAll])


    const SecondAttack = useCallback(() => {
        setSecondAction(false)
        const diference = (widthBar2.current - widthBossBar2.current);
        const typeOfAttack = isAction2.method || "none";
        const typeOfBossAttack = isActionBoss2.method || "attack";
        const timer = makeAction({ diference, typeOfAttack, typeOfBossAttack })
        const thirdTimer = setTimeout(() =>setThirdAction(true), timer)
    },[widthBar2, widthBossBar2, isAction2, isActionBoss2, makeAction])

    const firstAttack = useCallback(() => {
        setIsAttack(false)
        const diference = (widthBar1.current - widthBossBar1.current);
        const typeOfAttack = isAction1.method || "none";
        const typeOfBossAttack = isActionBoss1.method || "attack";
        const timer = makeAction({ diference, typeOfAttack, typeOfBossAttack })
        const secondTimer = setTimeout(() => setSecondAction(true), timer)
    }, [widthBar1, widthBossBar1, isAction1, isActionBoss1, makeAction,setIsAttack]);



    useEffect(function () {           
        if(!isStart){
            setSecondAction(false)
            setThirdAction(false)
            return
        }
        if (isAttack) {
            firstAttack()
        }
        return

    },[isStart,isAttack, firstAttack]);

    useEffect(function () {
        if(!isStart){
            setSecondAction(false)
            setThirdAction(false)
            return
        }        
        if (secondAction) {
            SecondAttack()
        }

    },[isStart,secondAction, SecondAttack])

    useEffect(function () {
        if(!isStart){
            setSecondAction(false)
            setThirdAction(false)
            return
        }
        
        if (thirdAction) {
            thirdAttack()
        }

    },[isStart,thirdAction, thirdAttack])

    return false
}