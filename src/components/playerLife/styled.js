import styled from "@emotion/styled"


export const LifeContainer = styled.div `
    display:flex;
    position:absolute;
    flex-direction:column;
    justify-content:center;
    margin:5px;
    padding:8px 10px;
    border:solid 1px black;
    border-radius:10px;
    left:0%;
    `

export const Life = styled.div `
    width:10px;
    height:10px;
    background:${props=>props.background};
    border:1px solid black;
    @media only screen and (min-width:600px){
        width:2.5vh;
        height:2.5vh;
    }

`