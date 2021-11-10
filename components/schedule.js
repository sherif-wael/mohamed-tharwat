import React, {useState} from "react";
import styled from "styled-components";
import media from "../styles/media";
import mixins from "../styles/mixins";
import {CSSTransition} from "react-transition-group"

const StyledContainer = styled.div`
    ${mixins.sidePaddings};
    padding-top: 20px;
    padding-bottom: 40px;
`

const StyledHeader = styled.div`
    ${mixins.flexCenter};
    margin-bottom: 10px;
    h2{
        padding: 10px 25px;
        color: #fff;
        box-shadow: 0 8px 30px rgb(0, 0, 0, 0.12);
        background-color: ${props => props.theme.colors.primary};
        border-radius: 30px;
    }
`

const StyledToggler = styled.div`
    ${mixins.flexCenter}
    margin: 20px;
    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
        &:hover img{
            transform: scale(1.1);
        }
        &:focus, &:active{
            outline: none;
        }
        img{
            width: 40px;
            height: 40px;
            transition: transform 200ms ease;
        }
    }
`

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    .main{
        ${mixins.flexCenter};
        font-size: 32px;
        font-weight: 600;
        color: #fff;
        padding: 20px;
        box-shadow: 1px 8px 30px rgb(0, 0, 0, 0.15);
        &:nth-of-type(1){
            background-color: ${props => props.theme.colors.secondary};
        }
        &:nth-of-type(2){
            background-color: ${props => props.theme.colors.primary}
        }
    }
    ${media(600)`
        grid-template-columns: 1fr;
        grid-gap: 20px;
    `}
`

const StyledLine = styled.p`
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
    text-align: center;
`

const StyledPhones = styled.div`
    ${mixins.flexCenter};
    flex-wrap: wrap;
    margin-top: 10px;
    a{
        margin: 10px;
        background-color: ${props => props.theme.colors.secondary};
        padding: 7px 15px;
        border-radius: 20px;
        text-decoration: none;
        color: #fff;
    }
    ${media(300)`
        ${mixins.flexColumnCenter};
        a{
            margin: 0 0 15px;
        }
    `}
`

let days = ["الجمعة", "السبت", "الاحد", "الاثنين", "الثلاثاء" , "الاربعاء", "الخميس"];
let openings = ["", "", "3:00-5:00 PM", "", "", "", "1:00-8:00 PM"];

function Schedule(){
    let [state, setState] = useState(0);
    return (
        <StyledContainer>
            <StyledHeader>
                <h2>مواعيد العمل</h2>
            </StyledHeader>
            <StyledLine>
                الحجز مسبقا تليفونيا من خلال الارقام التالية*
            </StyledLine>
            <StyledPhones>
                    <a href="tel:+01272901101">01272901101</a>
                    <a href="tel:01092909409">01092909409</a>
            </StyledPhones>
            <StyledToggler>
                <button onClick={() => setState(state - 1)} disabled={state <= 0}>
                    <img src="/images/upload.png" alt="down arrow image" />
                </button>
            </StyledToggler>
            <StyledWrapper>
                <div className="main">
                    {days[state]}
                </div>
                <div className="main">
                    {openings[state] ? openings[state] : "مغلق"}
                </div>
            </StyledWrapper>
            <StyledToggler>
                <button onClick={() => setState(state + 1)} disabled={state >= days.length - 1}>
                    <img src="/images/download.png" alt="down arrow image" />
                </button>
            </StyledToggler>
        </StyledContainer>
    )
}


export default Schedule