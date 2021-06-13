import styled from "@emotion/styled"
import {keyframes} from "@emotion/react"


const numberFade = keyframes `
    0%{
        opacity:1;
        transform:scale(1);
    }
    100%{
        opacity:0;
        transform:scale(4);
    }
`

export const Overlay = styled.button `
    position:absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    z-index:100;
    cursor:pointer;
    font-size:1.5rem;
    color:white;
    outline:none;
    border:none;
`

export const OverlayDisapear = styled.div `
    display:grid;
    place-items:center;
    position:absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    z-index:100;
    
`
export const CountDown = styled.div `
    font-size:3rem;
    color:white;
    animation:${numberFade} ${props=>props.timer}s infinite linear;
`