import React, {useState} from "react";
import styled from "styled-components";
import mixins from "../styles/mixins";
import media from "../styles/media";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {useMediaQuery} from "react-responsive";
import activities from "../lib/activites";

const StyledContainer = styled.section`
    margin: 60px 0;
`

const StyledHeader = styled.div`
    ${mixins.flexCenter};
    margin-bottom: 50px;
    h2{
        padding: 10px 25px;
        color: #fff;
        box-shadow: 0 8px 30px rgb(0, 0, 0, 0.12);
        background-color: ${props => props.theme.colors.primary};
        border-radius: 30px;
        ${media(400)`
            font-size: 22px;
        `}
        ${media(260)`
            font-size: 20px;
        `}
    }
`

const StyledActivites = styled.div`
    ${mixins.smallSidePaddings};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    ${media(1024)`
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
    `}
    ${media(740)`
        grid-template-columns: 1fr;
        grid-gap: 30px;
    `}
`

const StyledActivity = styled.div`
    ${mixins.flexColumn};
    margin: 0 auto;
    overflow: hidden;
    border-radius: 7px;
    padding-bottom: 20px;
    box-shadow: 2px 2px 15px rgb(0, 0, 0, 0.15),
                -2px -2px 15px rgb(0, 0, 0, 0.15);
    max-width: 440px;
    h3{
        text-align: right;
        font-size: 22px;
        margin: 12px 12px 16px;
        padding: 5px 8px 5px 5px;
        box-sizing: border-box;
        color: ${props => props.theme.colors.primary};
        border-right: 6px solid ${props => props.theme.colors.secondary};
        ${media(400)`
            font-size: 20px;
        `}
        ${media(260)`
            font-size: 18px;
        `}
    }
`


const StyledImg = styled.div`
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 140px;
    }
`

const StyledAnkers = styled.div`
    ${mixins.flexCenter};
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0 4px;
    a{
        margin: ${props => props.margin ? "0 10px 10px" : "0px"};
        padding: 3px 12px;
        border: 1.5px solid ${props => props.theme.colors.primary};
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        border-radius: 20px;
        transition: background-color 200ms ease,
                    color 200ms ease;
        &:hover{
            background-color: ${props => props.theme.colors.primary};
            color: #fff;
        }
    }
`


const StyledShowMore = styled.div`
    margin: 40px 0 30px;
    ${mixins.flexCenter};
    button{
        border: none;
        cursor: pointer;
        font-size: 16px;
        background-color: transparent;
        padding: 3px 12px;
        border: 1.5px solid ${props => props.theme.colors.primary};
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        border-radius: 20px;
        transition: background-color 200ms ease,
                    color 200ms ease;
        &:hover{
            background-color: ${props => props.theme.colors.primary};
            color: #fff;
        }
        &:active, &:focus{
            outline: none;
        }
    }
`

function Activities(){
    let [showMore, setShowMore] = useState(false);
    let notMobile = useMediaQuery({query: "(min-width: 740px)"});
    let tablet = useMediaQuery({query: "(max-width: 1024px)"});
    let max = tablet && notMobile ? 4 : 3;
    let displayedActivities = showMore ? activities : activities.slice(0, max);
    return (
        <StyledContainer>
            <StyledHeader>
                <h2>د/ محمد ثروت حجازى</h2>
            </StyledHeader>
            <StyledActivites>
                    {
                        displayedActivities.map(({img, header, ankers}, i) => (
                            <CSSTransition key={i} timeout={500} classNames="fadeup" in={true} appear>
                                <StyledActivity>
                                    <StyledImg>
                                        <img src={img} alt="activity img" />
                                    </StyledImg>
                                    <h3>{header}</h3>
                                    <StyledAnkers margin={ankers.length !== 1}>
                                        {
                                            ankers.map(({name, href}, index) => (
                                                <a href={href} key={index}>{name}</a>
                                            ))
                                        }
                                    </StyledAnkers>
                                </StyledActivity>
                            </CSSTransition>
                        ))
                    }
            </StyledActivites>
            { !(activities.length <= max) && 
                <StyledShowMore>
                    <button onClick={() => setShowMore(!showMore)}>
                       {showMore ? "عرض أقل" : "عرض المزيد"}
                    </button>
            </StyledShowMore>
            }
        </StyledContainer>
    )
}

export default Activities