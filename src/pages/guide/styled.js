import styled from "@emotion/styled"
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

export const Paper = styled.div `
    background:rgba(255,255,255,0.8);
    font-size:1.2rem;
    margin:20px;
    padding:10px;
    text-align:center;
    letter-spacing:1px;
    @media only screen and (min-width:800px){
        font-size:1.5rem;
    }
`