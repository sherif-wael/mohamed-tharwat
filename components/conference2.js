import React, {useState, useRef} from "react";
import styled from "styled-components";
import conferences from "../lib/conferences";
import media from "../styles/media";
import mixins from "../styles/mixins";
import Slider from "./slider";
import {CSSTransition} from "react-transition-group";

const StyledContainer = styled.div`
    ${mixins.smallSidePaddings};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin: 65px 0;
    align-items: center;
    ${media(1150)`
        grid-template-columns: 1fr;
    `}
`

const StyledTabs = styled.div`
    box-sizing: border-box;
    padding: 0 10px;
    box-shadow: 0 8px -5px rgb(0, 0, 0, 0.2);
    color: ${props => props.theme.colors.primary};
    order: 2;
    text-align: right;
    font-size: 18px;
    position: relative;
    ${media(800)`
        font-size: 16px;
    `}
`

const StyledTab = styled.h3`
    cursor: pointer;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    padding: 10px 8px;
    background-color: transparent;
    transition: background-color 200ms ease;
    &.selected{
        background-color: #f1f2f3;
    }
`

const StyledGallery = styled.div`
    max-height: 500px;
    div{
       max-width: 600px;
       margin: 0 auto;
    }
    img{
        height: 400px;
        width: 100%;
        ${media(700)`
            height: 300px;
        `}
    }
`

const StyledHighLight = styled.div`
    position: absolute;
    top: 0px;
    right: 0;
    width: 4px;
    height: 80px;
    transition: transform 200ms ease;
    background-color: ${props => props.theme.colors.secondary};
    transform: translateY(${props => props.state * 80}px);
`

export default function Conference(){
    let [state, setState] = useState(0);
    return (
        <StyledContainer>
            <StyledGallery>
                <Slider images={conferences[state].photos} />
            </StyledGallery>
            <StyledTabs>
            <StyledHighLight state={state} />
                {
                    conferences.map(({description}, i) => (
                        <StyledTab onClick={() => setState(i)}
                         className={i === state ? "selected" : ""}>{description}</StyledTab>
                    ))
                }
            </StyledTabs>
        </StyledContainer>
    )
}


