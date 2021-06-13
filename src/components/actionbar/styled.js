import styled from "@emotion/styled"
import {css, keyframes} from "@emotion/react"
import sword from "static/dualsword.png"
import shield from "static/shield.png"
import spin from "static/spin.png"


const ActionProgress = keyframes `
    from{
        width:0;
    }
    to{
        width:100%;
    }
`

export const ContainerBar = styled.div `
    position:absolute;
    height:18vh;
    left:10%;
    right:10%;
    bottom:20%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    padding:10px 10px;
    border:2px solid black;
    border-radius:5px;
    gap:8px 0px;
    @media only screen and (min-width:800px){
        flex-direction:row;        
        align-items:center;
        height:8vh;
        width:90vw;
        gap:0 10px;
        left:5%
    }
`

export const BarActions = styled.div `
position:relative;
    width:inherit;
    height:calc(15vh / 5);
    background:rgba(0,0,0,0.3);
    border:2px solid black;
    border-radius:5px;
    position:relative;
    @media only screen and (min-width:800px){
        width:calc(90vw / 3);
        height:3vh;
    }
`
export const Actions = styled.div `
    width:${props=> props.$action ? `${props.width}px` : `0`};
    background:radial-gradient(circle,cyan,blue);;
    height:calc(100% - 4px);
    border:${props=> props.$action ? `2px` : `0px`} solid black;
    border-radius:5px;
    position:absolute;
    z-index:2;
    ${props => props.$action ?  css`animation:${ActionProgress} ${props.timer}s linear;` : `none`}
`
export const ActionsBoss = styled.div `
    width:${props=> props.$action ? `100%` : `0`};
    background:radial-gradient(circle,white,${props=>props.background});
    height:calc(100% - 4px);
    border:${props=> props.$action ? `2px` : `0px`} solid black;
    border-radius:5px;
    position:absolute;
    z-index:1;
    ${props => props.$action ?  css`animation:${ActionProgress} ${props.timer}s linear;` : `none`}
`
export const IconMethod = styled.div `
    width:25px;
    height:25px;
    position:absolute;
    bottom:100%;
    left:${props=>props.left > 0 ? `${props.left}px`:`0px`};
    background:${props=>{
        switch(props.background){
            case "attack":
                return `url(${sword}) red`
            case "defence":
                return `url(${shield}) dodgerblue`
            case "avoid":
                return `url(${spin}) springgreen`
            default:
                return "none"
        }
    }};
    border-radius:50%;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat;
    z-index:3;
    @media only screen and (min-width:600px){
        width:3.5vh;
        height:3.5vh;
    }
`
export const IconMethodBoss = styled.div `
    width:25px;
    height:25px;
    position:absolute;
    bottom:100%;
    left:${props=>props.left > 0 ? `${props.left}px`:`0px`};
    background:${props=>{
        switch(props.background){
            case "attack":
                return `url(${sword}) purple`
            case "defence":
                return `url(${shield}) cadetblue`
            default:
                return "none"
        }
    }};
    border-radius:50%;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat;
    z-index:2;
    @media only screen and (min-width:600px){
        width:3.5vh;
        height:3.5vh;
    }
`