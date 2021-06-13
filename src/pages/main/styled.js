import styled from "@emotion/styled"
import {Link} from "wouter"
import fondo from "static/Fondos/fondo6.jpg"

export const Container = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    background:url(${fondo});
    background-size:100% 100%;
    background-repeat:no-repeat;
    background-color:coral;
` 

export const LinkButtom = styled(Link) `
    margin:1rem 0;
    padding:1rem;
    font-size:1.5rem;
    border-radius:10px;
    text-decoration:none;
    color:black;
    font-weight:600;
    background:${props=>`rgba(${props.r},${props.g},${props.b},${props.a})`};
    border-bottom:8px solid ${props=>`rgba(${props.r},${props.g},${props.b},${props.a})`};
    :hover{
        background:${props=>`rgba(${props.r},${props.g},${props.b},${props.a+0.10})`};
    }
    :active{
        border-bottom:4px solid ${props=>`rgba(${props.r},${props.g},${props.b},${props.a})`};
        transform:translateY(4px)
    }
`   
export const Head = styled.h1 `
    margin:0;
    font-size:3rem;
    background: linear-gradient(blue,purple);
    -webkit-background-clip: text;
    color: transparent;
    user-select:none;
    filter:drop-shadow(4px 4px 4px orangered);
    @media only screen and (max-width:350px){
        font-size:2rem;
    }
`
