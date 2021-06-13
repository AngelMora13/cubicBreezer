import styled from "@emotion/styled"
import fondo1 from "static/Fondos/fondo1.jpg"
import fondo2 from "static/Fondos/fondo2.jpg"
import fondo3 from "static/Fondos/fondo3.png"
import fondo4 from "static/Fondos/fondo4.jpg"
import fondo5 from "static/Fondos/fondo5.jpg"
import fondo6 from "static/Fondos/fondo6.jpg"
import fondo7 from "static/Fondos/fondo7.jpg"
import fondo8 from "static/Fondos/fondo8.jpg"
import fondo9 from "static/Fondos/fondo9.jpg"
import fondo10 from "static/Fondos/fondo10.png"

const BACKGROUND_LEVEL=[fondo1,fondo2,fondo3,fondo4,fondo5,fondo6,fondo7,fondo8,fondo9,fondo10]

export const Wrap = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
    background:url(${props=>BACKGROUND_LEVEL[props.fondo-1]});
    background-repeat:no-repeat;
    background-size:150vw 120vh;
    background-position:${props=>props.direction};
    background-color:coral;
    transition: all 2s ease-in-out;
`