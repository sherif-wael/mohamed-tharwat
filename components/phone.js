import styled from "styled-components";
import media from "../styles/media";


const StyledContainer = styled.a`
    background-color: ${props => props.theme.colors.secondary};
    box-shadow: 0 8px 8px -5px rgb(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 10px 10px 6px;
    img{
        width: 30px;
        height: 30px;
    }
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 4;
    ${media(600)`
        right: 20px;
        bottom: 20px;
    `}
`

function Phone(){
    return (
        <StyledContainer href="tel:01272901101">
            <img src="/images/phone.svg" alt="phone image" />
        </StyledContainer>
    )
}

export default Phone