import React, {useState} from "react";
import styled from "styled-components";
import mixins from "../styles/mixins";
import media from "../styles/media";



const StyledSlider = styled.div`
    overflow: hidden;
    max-width: 800px;
    margin: 0 auto;
`

const StyledSlides = styled.div`
    white-space: nowrap;
    height: 500px;
    transition: transform 600ms ease;
    ${media(600)`
        height: 400px;
    `}
`

const StyledPhoto = styled.div`
    box-shadow: 0 8px 10px -5px rgb(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    display: inline-block;
    position: relative;
    img{
        width: 100%;
        height: 100%;
    }
`

const StyledTogglers = styled.div`
    ${mixins.flexCenter};
    margin: 20px 0 10px;
`

const StyledToggler = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgb(0, 0, 0, 0.3);
    margin: 0 3px;
    cursor: pointer;
    &.selected{
        background-color: ${props => props.theme.colors.primary};
    }
`


function Slider({imgs}){
    let [state, setState] = useState(0);
    return (
        <StyledSlider>
            <StyledSlides style={{transform: `translateX(${state * 100 * -1}%)`}}>
                {
                    imgs.map((img, i) => (
                        <StyledPhoto key={i}>
                            <img src={img} alt="slider img"  />
                        </StyledPhoto>
                    ))
                }
            </StyledSlides>
            <StyledTogglers>
                {
                    [...new Array(4)].map((elem, i) => (
                        <StyledToggler className={i === state ? "selected" : ""} 
                                        onClick={() => setState(i)} key={i}>

                        </StyledToggler>
                    ))
                }
            </StyledTogglers>
        </StyledSlider>
    )
}

export default Slider