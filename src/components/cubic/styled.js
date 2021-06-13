import { keyframes,css } from "@emotion/react"
import styled from "@emotion/styled"

const rotorStamby = keyframes `
    0%{
        transform:rotateX(45deg) rotateY(45deg)
        
    }
    100%{
        transform:rotateX(405deg) rotateY(405deg);
    }
`

const rotorAttack = keyframes `
    0%{
        transform:rotateX(45deg) rotateY(45deg) translateX(0px) translateY(0px);
        
    }
    50%{
        transform:rotateX(205deg) rotateY(205deg) translateX(200px) translateY(250px);
    }
    100%{
        transform: rotateX(405deg) rotateY(405deg) translateX(0px) translateY(0px);
    }
`
const rotorAttackHeight600 = keyframes `
    0%{
        transform:rotateX(45deg) rotateY(45deg) translateX(0px) translateY(0px);
        
    }
    50%{
        transform:rotateX(205deg) rotateY(205deg) translateX(30vw) translateY(100vh);        
        margin-right:35%;
    }
    100%{
        transform: rotateX(405deg) rotateY(405deg) translateX(0px) translateY(0px);
    }
`

const rotorDefence = keyframes `
    0%{
        transform:rotate3d(1,0,0,-45deg) rotate3d(0,0,1,0deg);
        
    }
    100%{
        transform:rotate3d(1,0,0,-45deg) rotate3d(0,0,1,360deg);
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
    --area:70px;
    position:absolute;
    top:15%;
    background:none;
    margin:0;
    padding:0;
    width:var(--area);
    height:var(--area);
    transform-style: preserve-3d;
    transform-origin:center;
    visibility:${props=>props.anim==="destroy"? `hidden` : `visible`};    
    animation:${props=>{
        switch(props.anim){
            case "attack":
                return css`${rotorAttack} 1s linear infinite`
            case "defence":
                return css`${rotorDefence} 1s linear infinite`
            case "destroy":
                return css`${rotorDestroy} 1s linear forwards`
            default:
                return css`${rotorStamby} 2s linear infinite`
        }
    }};
    @media only screen and (min-height:750px){
        animation:${props=>{
        switch(props.anim){
            case "attack":
                return css`${rotorAttackHeight600} 1s linear infinite`
            case "defence":
                return css`${rotorDefence} 1s linear infinite`
            case "destroy":
                return css`${rotorDestroy} 2s linear infinite`
            default:
                return css`${rotorStamby} 2s linear infinite`
        }
    }};
    }
    @media only screen and (min-height:1000px) and (min-width:800px){
        --area:140px;
    }
    @media only screen and (max-height:500px){
        --area:40px;
    }
    
`
//
export const Lado = styled.div `
    --area:70px;
    ${props=>props.background? `background:radial-gradient(circle,white,${props.background});` : ""}
    position:absolute;
    width:var(--area);
    height:var(--area);
    border:1px solid white;
    transition: all 1s ease-in-out;    
    @media only screen and (min-height:1000px) and (min-width:800px){
        --area:140px;
    }
    @media only screen and (max-height:500px){
        --area:40px;
    }
    :nth-of-type(1){
        transform:${props=>{
        switch(props.anim){
            case "destroy":
                return `translate3d(0,0,-335px);`
            default:
                return `translate3d(0,0,-35px);`
        }
        }};
        @media only screen and (min-height:1000px) and (min-width:800px){
            transform:${props=>{
                switch(props.anim){
                    case "destroy":
                        return `translate3d(0,0,-335px);`
                    default:
                        return `translate3d(0,0,-70px);`
                }
            }};
        }
        @media only screen and (max-height:500px){
            transform:${props=>{
                switch(props.anim){
                    case "destroy":
                        return `translate3d(0,0,-335px);`
                    default:
                        return `translate3d(0,0,-20px);`
                }
            }};
        }
    }
    :nth-of-type(2){
        right:${props=>{
        switch(props.anim){
            case "destroy":
                return `235px`
            default:
                return `35px`
        }
        }};
        transform:${props=>props.anim==="defence"? `rotateY(0deg)`:`rotateY(90deg)`};
        @media only screen and (min-height:1000px) and (min-width:800px){
            right:${props=>{
                switch(props.anim){
                    case "destroy":
                        return `235px`
                    default:
                        return `70px`
                }
            }};
        }
        @media only screen and (max-height:500px){
            right:${props=>{
                switch(props.anim){
                    case "destroy":
                        return `235px`
                    default:
                        return `20px`
                }
            }};
        }
        
    }
    :nth-of-type(3){
        left:${props=>{
        switch(props.anim){
            case "destroy":
                return `235px`
            default:
                return `35px`
        }
        }};
        transform:${props=>props.anim==="defence"? `rotateY(0deg)`:`rotateY(90deg)`};
        @media only screen and (min-height:1000px) and (min-width:800px){
            left:${props=>{
                switch(props.anim){
                    case "destroy":
                        return `235px`
                    default:
                        return `70px`
                }
            }};
        }
        @media only screen and (max-height:500px){
            left:${props=>{
                switch(props.anim){
                    case "destroy":
                        return `235px`
                    default:
                        return `20px`
                }
            }};
        }
    }
    :nth-of-type(4){
        transform:${props=>{
        switch(props.anim){
            case "destroy":
                return `translate3d(0,0,335px);`
            default:
                return `translate3d(0,0,35px);`
        }
        }};
        @media only screen and (min-height:1000px) and (min-width:800px){
            transform:${props=>{
                switch(props.anim){
                    case "destroy":
                        return `translate3d(0,0,335px);`
                    default:
                        return `translate3d(0,0,70px);`
                }
            }};
        }
        @media only screen and (max-height:500px){
            transform:${props=>{
                switch(props.anim){
                    case "destroy":
                        return `translate3d(0,0,335px);`
                    default:
                        return `translate3d(0,0,20px);`
                }
            }};
        }
    }
`
export const LadoSupInferior = styled.div `
    --area:70px;
    ${props=>props.background? `background:radial-gradient(circle,white,${props.background});` : ""}
    position:absolute;
    width:var(--area);
    height:var(--area);
    border:1px solid white;
    transition: all 1s ease-in-out;
    transform:${props=>props.anim==="defence"? `rotateX(0deg)`:`rotateX(90deg)`};
    @media only screen and (min-height:1000px) and (min-width:800px){
        --area:140px;
    }
    @media only screen and (max-height:500px){
        --area:40px;
    }
    :nth-of-type(5){
        top:${props=>{
        switch(props.anim){
            case "destroy":
                return `235px`
            default:
                return `35px`
        }
        }};
        @media only screen and (min-height:1000px) and (min-width:800px){
            top:${props=>{
        switch(props.anim){
            case "destroy":
                return `235px`
            default:
                return `70px`
        }
        }};
    }
        @media only screen and (max-height:500px){
            top:${props=>{
                switch(props.anim){
                    case "destroy":
                        return `235px`
                    default:
                        return `20px`
                }
            }};
        }
    }
    :nth-of-type(6){
        bottom:${props=>{
        switch(props.anim){
            case "destroy":
                return `235px`
            default:
                return `35px`
        }
        }};

        @media only screen and (min-height:1000px) and (min-width:800px){
            bottom:${props=>{
        switch(props.anim){
            case "destroy":
                return `235px`
            default:
                return `70px`
        }
        }};
    }
        @media only screen and (max-height:500px){
            bottom:${props=>{
                switch(props.anim){
                    case "destroy":
                        return `235px`
                    default:
                        return `20px`
                }
            }};
        }
    }

`