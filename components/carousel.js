import Flickity from "react-flickity-component";
import styled from "styled-components";
import media from "../styles/media";

const StyledContainer = styled.div`
    margin-bottom: 30px;
    .carousel{
        height: 500px;
        max-width: 800px;
        margin: 0 auto;
        ${media(600)`
            height: 400px;
        `}
        img{
            width: 100%;
            height: 100%;
        }
    }
`

function Carousel(){
    return (
        <StyledContainer>
            <Flickity
            className="carousel"
            elementType="div"
            disableImagesLoaded={false}
            reloadOnUpdate
            static
            >
                <img src="/images/clinic1.jpeg" alt="clinic image" />
                <img src="/images/clinic2.jpeg" alt="clinic image" />
                <img src="/images/clinic3.jpeg" alt="clinic image" />
                <img src="/images/clinic4.jpeg" alt="clinic image" />
            </Flickity>
        </StyledContainer>
    )
}

export default Carousel;