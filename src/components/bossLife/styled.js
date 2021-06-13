import styled from "@emotion/styled"
import {keyframes,css} from "@emotion/react"

const Latir = keyframes `
    0%{
        transform:rotate3d(0,1,0,0deg) rotate3d(0,0,1,-45deg);
    }
    100%{
        transform:rotate3d(0,1,0,360deg) rotate3d(0,0,1,-45deg);
    }

`
/*
const BossFail = keyframes `
    0%{
        transform:translate3d(0,0,0);
    }
    50%{
        transform:translate3d(48vw,10vh,0);
    }
    100%{
        transform:translate3d(48vw,40vh,0);
        visibility:hidden;
    }
`
const BossFailWidth600 = keyframes `
    0%{
        transform:translate3d(0,0,0);
    }
    50%{
        transform:translate3d(48vw,10vh,0);
    }
    100%{
        transform:translate3d(48vw,50vh,0);
        visibility:hidden;
    }
`*/
const vibrar = keyframes `
    0%{
        transform:translateX(10px);
    }
    35%{
        transform:translateX(-10px);
    }
    70%{
        transform:translateX(10px);
    }
    100%{
        transform:translateX(0px);
    }
`

export const LifeContainer = styled.div `
    display:flex;
    position:absolute;
    flex-direction:row;
    justify-content:center;
    padding:4px 12px;
    border:${props=>props.life<=0? `none` : `1px solid black`};
    border-radius:5px;
    top:25px;
    left:25px;
    animation:${props=>props.anim? css`${vibrar} 0.5s linear infinite` :"none"}; 
    `

export const Life = styled.div `
    width:15px;
    height:15px;
    background:red;
    border:1px solid black;
            
    @media only screen and (max-width:355px){        
            height:13px;
            width:13px;
        }
    @media only screen and (min-width:600px){
        width:2.5vh;
        height:2.5vh;
    }

`
export const HeartContainer = styled.div`
    height:25px;
    position:absolute;
    left:-25px;
    width:25px;
    margin:0 10px;
    @media only screen and (min-width:600px){
        height:5vh;
        width:5vh;
        
    }
`
export const Heart = styled.div `
    background:red;
    width:25px;
    height:25px;
    position:absolute;
    transform:rotate(-45deg);
    animation:${Latir} 4s linear infinite;

    @media only screen and (min-width:600px){
        height:5vh;
        width:5vh;
    }
    :before{
        top:-12.5px;
        left:0;
        content:"";
        background:red;
        border-radius:50%;
        height:25px;
        position:absolute;
        width:25px;
        @media only screen and (min-width:600px){
            top:-2.5vh;
            height:5vh;
            width:5vh;
        }
    }
    :after{
        left:12.5px;
        top:0;
        content:"";
        background:red;
        border-radius:50%;
        height:25px;
        width:25px;
        position:absolute;

        @media only screen and (min-width:600px){
            left:2.5vh;
            height:5vh;
            width:5vh;
        }
    }
    
`
export const LevelContainer = styled.div `
    color:red;
    font-size:0.8rem;
    margin-left:10px;
    align-self:center;
    @media only screen and (min-width:600px){
        font-size:1rem;
    }
`