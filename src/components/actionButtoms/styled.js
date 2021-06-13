import styled from "@emotion/styled"
import sword from "static/dualsword.png"
import shield from "static/shield.png"
import spin from "static/spin.png"

export const ContainerButtoms = styled.div `
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    gap:6px;
    position:absolute;
    padding:6px;
    bottom:5%;
    @media only screen and (min-width:600px){
        gap:5vw;
    }
` 

export const ActionsBtn = styled.div `
    border:none;
    width:70px;
    height:70px;
    border-radius:10px;
    border-bottom:5px solid gray;
    margin:0 10px;
    box-shadow:6px 6px 6px grey;
    outline:none;
    cursor:pointer;
    :active{
        box-shadow:2px 2px 2px grey;
        border-bottom:2px solid gray;
        transform:translateY(4px);
    }
    :nth-of-type(1){
        background:url(${sword});
        background-size:contain;
        background-repeat:no-repeat;
        background-color:red;
        :active{
            background-color:transparent;
            filter:drop-shadow(2px 2px 4px red);
        }
    }
    :nth-of-type(2){
        background:url(${shield});
        background-size:contain;
        background-repeat:no-repeat;
        background-color:dodgerblue;
        :active{
            background-color:transparent;
            filter:drop-shadow(2px 2px 4px dodgerblue);
        }
    }
    :nth-of-type(3){
        background:url(${spin});
        background-size:contain;
        background-repeat:no-repeat;
        background-color:springgreen;
        :active{
            background-color:transparent;
            filter:drop-shadow(2px 2px 4px springgreen);
        }
    }
    @media only screen and (min-width:600px){
        width:10vh;
        height:10vh;
    }
` 