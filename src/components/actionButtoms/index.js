import React from "react"
import {ContainerButtoms, ActionsBtn} from "./styled"
import useSelectActions from "hook/useSelectActions"

function ActionButtoms () {
    const {onAttack,onDefence,onAvoid} = useSelectActions()

    return (
        <ContainerButtoms>
            <ActionsBtn onClick={()=>onAttack()}/>
            <ActionsBtn onClick={()=>onDefence()}/>
            <ActionsBtn onClick={()=>onAvoid()} />
        </ContainerButtoms>
    )
}

export default React.memo(ActionButtoms)