import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

const left = [90,87,79,68,55,43,35,22,15,10,3]

const randomLeftPosition = ()=>{
    const leftPosition = left[Math.floor((Math.random()*10))]
    return leftPosition
}

const Smash1 = keyframes `
    0%{
        left:${randomLeftPosition()}%;
        top:0%;
    }
    100%{
        left:${randomLeftPosition()}%;
        top:87%;
        background:yellow;
        visibility:visible;
        transform:rotateX(55deg);
    }
`
const Smash2 = keyframes `
    0%{
        left:${randomLeftPosition()}%;
        top:0%;
    }
    100%{
        left:${randomLeftPosition()}%;
        top:94%;
        background:yellow;
        visibility:visible;
        transform:rotateX(55deg);
    }
`
const Smash3 = keyframes `
    0%{
        left:${randomLeftPosition()}%;
        top:0%;
    }
    100%{
        left:${randomLeftPosition()}%;
        top:86%;
        background:yellow;
        visibility:visible;
        transform:rotateX(55deg);
    }
`
const Smash4 = keyframes `
    0%{
        left:${randomLeftPosition()}%;
        top:0%;
    }
    100%{
        left:${randomLeftPosition()}%;
        top:92%;
        background:yellow;
        visibility:visible;
        transform:rotateX(55deg);
    }
`
const Smash5 = keyframes `
    0%{
        left:${randomLeftPosition()}%;
        top:1%;
    }
    100%{
        left:${randomLeftPosition()}%;
        top:90%;
        background:yellow;
        visibility:visible;
        transform:rotateX(55deg);
    }
`

export const Meteor = styled.span `
    position:absolute;
    width:10px;
    height:10px;
    border-radius:50%;
    background:red;
    visibility:hidden;
    transition:all 1s ease-in-out;  
    :nth-of-type(1){
        animation:${Smash1} 1s ease-out infinite;
        animation-delay:0.5s;
    }
    :nth-of-type(2){
        animation:${Smash2} 1s ease-out infinite;
        animation-delay:1s;
    }
    :nth-of-type(3){
        animation:${Smash3} 1s ease-out infinite;
        animation-delay:1.3s;
    }
    :nth-of-type(4){
        animation:${Smash4} 1s ease-out infinite;
        animation-delay:0.7s;
    }
    :nth-of-type(5){
        animation:${Smash5} 1s ease-out infinite;
    }
    :nth-of-type(6){
        animation:${Smash1} 1s ease-out forwards;
        animation-delay:0.5s;
    }
    :nth-of-type(7){
        animation:${Smash2} 1s ease-out forwards;
        animation-delay:1s;
    }
    :nth-of-type(8){
        animation:${Smash3} 1s ease-out forwards;
        animation-delay:1.3s;
    }
    :nth-of-type(9){
        animation:${Smash4} 1s ease-out forwards;
        animation-delay:0.7s;
    }
    :nth-of-type(10){
        animation:${Smash5} 1s ease-out forwards;
    }
    
`