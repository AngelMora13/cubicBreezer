import styled from "@emotion/styled"
import {keyframes} from "@emotion/react"

const Spin = keyframes `
    0%{
        transform:rotate(0deg)
    }
    100%{
        transform:rotate(360deg)
    }
` 

export const SpinLoader = styled.div `
    width:5rem;
    height:5rem;
    border:10px solid rgba(255,255,255,0.4);
    border-bottom:10px solid cyan;
    border-radius:50%;
    transition:all 1s ease-in-out;
    animation:${Spin} 1s linear infinite;
`