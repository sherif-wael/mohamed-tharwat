import Flickity from "react-flickity-component";
import styled from "styled-components";
import media from "../styles/media";

const StyledContainer = styled.div`
    margin-bottom: 80px;
    .carousel{
      max-width: 800px;
      margin:0 auto;
      height: 500px;
      ${media(600)`
        height: 400px;
      `}
      img{
          width: 100%;
          height: 100%;
      }
    }
`

const clinicImages = ["/images/clinic1.jpeg", "/images/clinic2.jpeg", 
                        "/images/clinic3.jpeg", "/images/clinic4.jpeg"]

function Carousel(){
    return (
        <StyledContainer>
           <Flickity
                className="carousel"
                elementType="div"
                reloadOnUpdate
                static>
                    {
                        clinicImages.map((img, i) => (
                            <img src={img} key={i} alt="clinic image" />
                        ))
                    }
                </Flickity>
        </StyledContainer>
    )
}

export default Carousel;