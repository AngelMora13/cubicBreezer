import React from "react"
import {LifeContainer, Life} from "./styled"
import useLifeEffect from "hook/useLifeEffect";

function PlayerLifeMeter(){
    const {lifeBG} = useLifeEffect()
    return (
        <>
        <LifeContainer>
        <Life background={lifeBG[0]}/>
        <Life background={lifeBG[1]}/>
        <Life background={lifeBG[2]}/>
        <Life background={lifeBG[3]}/>
        </LifeContainer>
        </>
    )
}
export default React.memo(PlayerLifeMeter)