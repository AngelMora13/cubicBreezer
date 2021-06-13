import { keyframes, css } from "@emotion/react"
import styled from "@emotion/styled"

const rotorStamby = keyframes `
    0%{
        transform:rotate3d(1,0,0,20deg) rotate3d(0,1,0,0deg);       
    }
    100%{
        transform:rotate3d(1,0,0,20deg) rotate3d(0,1,0,360deg);        
    }
`
const rotorAttack = keyframes `
    0%{
        transform:rotate3d(1,0,0,20deg) rotate3d(0,1,0,0deg) translateY(0px);       
    }
    20%{
        transform:rotate3d(1,0,0,180deg) rotate3d(0,1,0,0deg) translateY(0px);       
    }
    70%{
        transform:rotate3d(1,0,0,180deg) rotate3d(0,1,0,360deg) translateY(40vh);        
    }
    100%{
        transform:rotate3d(1,0,0,20deg) rotate3d(0,1,0,360deg) translateY(0px);  
    }
`

const rotorDefence = keyframes `
    0%{
        transform:rotate3d(1,0,0,20deg) rotate3d(0,1,0,0deg);       
    }
    100%{
        transform:rotate3d(1,0,0,20deg) rotate3d(0,1,0,720deg);        
    }
`

const rotorAvoid = keyframes `
    0%{
        transform:rotate3d(1,0,0,20deg) rotate3d(0,1,0,720deg);               
    }
    50%{
        transform:rotate3d(1,0,0,90deg) rotate3d(0,1,0,0deg);         
    }
    100%{
        transform:rotate3d(1,0,0,20deg) rotate3d(0,1,0,720deg); 
    }
`
const rotorDestroy = keyframes `
    0%{
        transform:rotate3d(1,0,0,45deg) rotate3d(0,1,0,45deg);
        
    }
    99%{
        transform:rotate3d(1,0,0,305deg) rotate3d(0,1,0,305deg);
    }
    100%{
        transform:rotate3d(1,0,0,405deg) rotate3d(0,1,0,405deg);
    }
`
export const Container = styled.div `
    --area:100px;
    position:absolute;
    bottom:${props=>props.anim==="defence"? `35%`:`45%`};    
    background:none;
    margin:0;
    padding:0;
    width:var(--area);
    height:var(--area);
    transform-style: preserve-3d;
    transition:all 1s ease-in-out;
    visibility:${props=>props.anim==="destroy"? `hidden` : `visible`};  
    animation:${props=>{
        switch(props.anim){
            case "attack":
                return css`${rotorAttack} 2s linear infinite`
            case "defence":
                return css`${rotorDefence} 2s linear infinite`
            case "avoid":
                return css`${rotorAvoid} 2s linear infinite`
            case "destroy":
                return css`${rotorDestroy} 1s linear forwards`
            default:
                return css`${rotorStamby} 2s linear infinite`
        }
    }};

    @media only screen and (min-width:800px){
        bottom:${props=>props.anim==="defence"? `25%`:`40%`};
    }
    @media only screen and (min-height:1000px) and (min-width:800px){
        --area:180px;
    }
    @media only screen and (max-height:500px){
        --area:50px;
        bottom:${props=>props.anim==="defence"? `35%`:`48%`};  
    }
`
//animation:${rotorStamby} 3s linear infinite;
//transform:rotate3d(1,1,1,45deg);
export const Lado = styled.div `
    --area:50px;
    position:absolute;
    width:0;
    height:0;    
    border-right:var(--area) solid transparent;
    border-left:var(--area)solid transparent;
    border-bottom:calc(var(--area) * 2) solid ${props=>props.background};
    transform-origin:50% 0;
    filter:drop-shadow(2px 2px 1px black);
    transition:all 1s ease-in-out;

    @media only screen and (min-height:1000px) and (min-width:800px){
        --area:90px;
    }
    @media only screen and (max-height:500px) {
        --area:25px;
    }
    :nth-of-type(1){
        transform:${props=>{
            switch(props.anim){
                case "attack":
                    return `rotate3d(1,0,0,180deg)`
                case "defence":
                    return `rotate3d(1,0,0,90deg)`
                case "destroy":
                    return `rotate3d(1,0,0,30deg) translate3d(0,0,-335px)`
                default:
                    return `rotate3d(1,0,0,30deg)`
            }
        }};        
    }
    :nth-of-type(2){
        transform:${props=>{
            switch(props.anim){
                case "attack":
                    return `rotate3d(1,0,0,-180deg)`
                case "defence":
                    return `rotate3d(1,0,0,-90deg)`
                case "destroy":
                    return `rotate3d(1,0,0,-30deg) translate3d(0,0,335px)`
                default:
                    return `rotate3d(1,0,0,-30deg)`
            }
        }};  
    }
    :nth-of-type(3){
        transform:${props=>{
            switch(props.anim){
                case "attack":
                    return `rotate3d(0,1,0,90deg) rotate3d(1,0,0,180deg)`
                case "defence":
                    return `rotate3d(0,1,0,90deg) rotate3d(1,0,0,90deg)`
                case "destroy":
                    return `rotate3d(0,1,0,90deg) rotate3d(1,0,0,30deg) translate3d(0,0,-335px)`
                default:
                    return `rotate3d(0,1,0,90deg) rotate3d(1,0,0,30deg)`
            }
        }}; 
    }
    :nth-of-type(4){
        transform:${props=>{
            switch(props.anim){
                case "attack":
                    return `rotate3d(0,1,0,90deg) rotate3d(1,0,0,-180deg)`
                case "defence":
                    return `rotate3d(0,1,0,90deg) rotate3d(1,0,0,-90deg)`
                case "destroy":
                    return `rotate3d(0,1,0,90deg) rotate3d(1,0,0,-30deg) translate3d(0,0,335px)`
                default:
                    return `rotate3d(0,1,0,90deg) rotate3d(1,0,0,-30deg)`
            }
        }} ;
    }    
`
export const Base = styled.div `
    --area:100px;
    ${props=>props.background? `background:radial-gradient(circle,white,${props.background});` : ""}
    position:absolute;
    width:var(--area);
    height:var(--area);
    top:${props=>props.anim==="defence"? `-35px`:`35px`};
    transition:all 1s ease-in-out;
    transform:rotateX(90deg);
    opacity:0.2;
    filter:drop-shadow(2px 2px 1px black);
    @media only screen and (min-height:1000px) and (min-width:800px){
        --area:180px; 
        top:${props=>props.anim==="defence"? `-70px`:`70px`};
    }
    @media only screen and (max-height:500px) {
        --area:50px;
        top:${props=>props.anim==="defence"? `-35px`:`20px`};
    }
`