import styled from "@emotion/styled"

export const AudioPlay = styled.button `
    position:absolute;
    top:${props=>props.top}%;
    left:${props=>props.left}%;
    width:2.5rem;
    height:2.5rem;
    border-radius:50%;
    background:rgba(0,0,0,0.7);
    color:white;
    border:none;
    z-index:5;
`