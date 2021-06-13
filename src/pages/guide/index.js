import React from "react"
import {Container, Paper} from "./styled"
import MeteorSmash from "components/meteors"
import {LinkButtom} from "pages/main/styled"

function GuidePage () {

    return (
        <Container>
        <Paper>
            <p>Enjoy, you don´t need a guide</p>
            <p>Just trust your abilities</p>
            <p>And remember, you have life, can attack, defend and avoid damage</p>
            <p>If you attack you will do +1 damage and if you match the boss action you will 
            do +2 damage but if the boss is attacking you will recibe +2 damage</p>
            <p>If you defend, damage recived is 0 and can´t make damage</p>
            <p>If you avoid, you don´t take damage and if match the boss action can heal +2 but 
            if the boss is defending you will lose life </p>
            <p>Go to max level: 10 :D</p>
            </Paper>
            <LinkButtom to="/" r={255} g={255} b={255} a={0.7}>Go to Home</LinkButtom>
            <MeteorSmash/>
        </Container>
    )
}
export default React.memo(GuidePage)