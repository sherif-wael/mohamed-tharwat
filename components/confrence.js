import React, {useState} from "react";
import Flickity from "react-flickity-component";
import styled from "styled-components";
import mixins from "../styles/mixins";
import media from "../styles/media";
import conferences from "../lib/conferences";
import {useMediaQuery} from "react-responsive";
import {CSSTransition} from "react-transition-group";


const StyledContainer = styled.div`
    ${mixins.smallSidePaddings};
    margin-top: 50px;
`


const StyledHeader = styled.div`
    ${mixins.flexCenter};
    margin-bottom: 50px;
    h2{
        padding: 10px 25px;
        text-align: center;
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

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
    ${media(1024)`
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
    `}
    ${media(740)`
        grid-template-columns: 1fr;
        grid-gap: 30px;
    `}
`

const StyledConference = styled.div`
    ${mixins.flexColumn};
    max-width: 440px;
    box-shadow: 2px 2px 15px rgb(0, 0, 0, 0.15),
                -2px -2px 15px rgb(0, 0, 0, 0.15);
    border-radius: 7px;
    overflow: hidden;
    margin: 0 auto;
    h3{
        text-align: right;
        flex-grow: 1;
        ${mixins.flexCenter}
        font-size: 22px;
        margin: 25px 10px 10px 3px;
        border-right: 6px solid ${props => props.theme.colors.secondary};
        padding: 5px 8px 5px 5px;
        box-sizing: border-box;
        color: ${props => props.theme.colors.primary};
        ${media(400)`
            font-size: 20px;
        `}
        ${media(260)`
            font-size: 18px;
        `}
    }
`

const StyledGallery = styled.div`
    .carousel{
        height: 250px;
        margin: 0 auto;
        img{
            width: 100%;
            height: 100%;
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

function Conference(){
    let [showMore, setShowMore] = useState(false);
    let notMobile = useMediaQuery({query: "(min-width: 740px)"});
    let tablet = useMediaQuery({query: "(max-width: 1024px)"});
    let max = tablet && notMobile ? 4 : 3;
    let displayedConferences = showMore ? conferences : conferences.slice(0, max);
    return (
        <StyledContainer>
             <StyledHeader>
                 <h2>المؤتمرات و الزيارات الدولية</h2>
            </StyledHeader>
            <StyledGrid>
                {
                    displayedConferences.map(({description, photos}, i) => (
                        <CSSTransition classNames="fadeup" timeout={500} appear in={true} key={i}>
                            <StyledConference>
                                <StyledGallery>
                                    {/* <Flickity 
                                        className="carousel"
                                        elementType="div"
                                        static
                                        >
                                            {
                                                photos.map((photo, i) => (
                                                    <img src={photo} alt="conference image" key={i} />
                                                ))
                                            }
                                    </Flickity> */}
                                </StyledGallery> 
                                    <h3>{description}</h3>
                            </StyledConference>
                        </CSSTransition>
                    ))
                }
            </StyledGrid>
            {
                !(conferences.length <= max) && 
                    <StyledShowMore>
                        <button onClick={() => setShowMore(!showMore)}>
                           {showMore ? "عرض أقل" : "عرض المزيد"}
                        </button>
                </StyledShowMore>
            }
        </StyledContainer>
    )
}

export default Conference