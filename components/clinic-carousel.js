import styled from "styled-components";
import media from "../styles/media";
import Slider from "./slider";

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 50px;
  img {
    width: 100%;
    height: 500px;
    ${media(600)`
            height: 400px;
        `}
  }
`;

const clinicImages = [
  "/images/clinic1.jpeg",
  "/images/clinic2.jpeg",
  "/images/clinic3.jpeg",
  "/images/clinic5.jpeg",
  "/images/clinic6.jpeg",
  "/images/clinic7.jpeg",
  "/images/clinic8.jpeg",
  "/images/clinic9.jpeg",
  "/images/clinic10.jpeg",
];

function Carousel() {
  return (
    <StyledContainer>
      <Slider images={clinicImages} />
    </StyledContainer>
  );
}

export default Carousel;
