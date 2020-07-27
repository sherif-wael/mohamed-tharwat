import Carousel from "nuka-carousel";
import styled from "styled-components";
import media from "../styles/media"

const StyledContainer = styled.div`
    .carousel{
        .dots{
            width: 36px;
            height: 36px;
            &:focus, &:active{
                outline: none;
            }
            svg{
                width: 12px;
                height: 12px;
                circle{
                    fill: rgb(255, 255, 255, 0.9);
                    cx: 5;
                    cy: 5;
                    r: 5
                }
            }
        }
        .btn{
            border: none;
            background-color: transparent;
            cursor: pointer;
            &:focus, &:active{
                outline: none;
            }
            img{
                width: 30px;
                height: 30px;         
            }
        }
    }
`


let defaultControlsConfig = {
    containerClassName: "carousel",
    pagingDotsClassName: "dots" 
}



function Slider({images}){
    let prevButton = ({previousSlide}) => {
        return <button onClick={previousSlide} className="btn"><img src="/images/return.svg" alt="return img" /></button>
    }
    let nextButton = ({nextSlide}) => {
        return <button onClick={nextSlide} className="btn"><img src="/images/next.svg" alt="next img" /></button>
    }
    return (
        <StyledContainer>
            <Carousel defaultControlsConfig={defaultControlsConfig} 
                renderCenterLeftControls={prevButton}
                renderCenterRightControls={nextButton}
                >
                {
                    images.map((img, i) => (
                        <img src={img} alt="slide image" key={i} className="slide" />
                    ))
                }
            </Carousel>
        </StyledContainer>
    )
}

export default Slider