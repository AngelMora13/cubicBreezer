import React, { useContext } from "react"
import {ContainerBar, BarActions, Actions, ActionsBoss, IconMethod, IconMethodBoss} from "./styled"

import Player from "context/playerContext"
import Boss from "context/bossContext"
import StartPlay from "context/startPlayContext"

import useActionBar from "hook/useActionBar"
import useSetActions from "hook/useSetActions"
import useBossSetActions from "hook/useBossSetActions"

import useFirstAction from "hook/useFirstAction"

function Actionbar () {
    const {action1,action2,action3,actionBoss1,actionBoss2,actionBoss3} = useActionBar()
    const { isAction1, isAction2, isAction3 } = useContext(Player);
    const { isActionBoss1, isActionBoss2, isActionBoss3 } = useContext(Boss);
    const {level,bossBG} = useContext(StartPlay)
    const {widthBar1,widthBar2,widthBar3} = useSetActions()
    const {widthBossBar1,widthBossBar2,widthBossBar3} = useBossSetActions()

    const {something} = useFirstAction()

    const timer=2-(0.15*(level-1))

    return (
        <ContainerBar>    

        <BarActions id="action1">
        <IconMethod background={isAction1.method} left={Math.floor(widthBar1.current)}/>
        <ActionsBoss $action={actionBoss1} timer={timer.toFixed(2)} background={bossBG}/>
        <Actions  $action={action1} width={widthBar1.current} timer={timer.toFixed(2)}/>
        <IconMethodBoss background={isActionBoss1.method} left={widthBossBar1.current}/>
        </BarActions>

        <BarActions id="action2">
        <IconMethod background={isAction2.method} left={Math.floor(widthBar2.current)}/>
        <ActionsBoss $action={actionBoss2} timer={timer.toFixed(2)} background={bossBG}/>
        <Actions $action={action2} width={widthBar2.current} timer={timer.toFixed(2)}/>
        <IconMethodBoss background={isActionBoss2.method} left={widthBossBar2.current}/>
        </BarActions>

        <BarActions id="action3">
        <IconMethod background={isAction3.method} left={Math.floor(widthBar3.current)}/>
        <ActionsBoss $action={actionBoss3} timer={timer.toFixed(2)} background={bossBG}/>
        <Actions $action={action3} width={widthBar3.current} timer={timer.toFixed(2)}/>
        <IconMethodBoss background={isActionBoss3.method} left={widthBossBar3.current}/>
        </BarActions>

        </ContainerBar>
    )
}

export default React.memo(Actionbar)