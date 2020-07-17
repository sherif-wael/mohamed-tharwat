import styled from "styled-components";
import media from "../styles/media";
import mixins from "../styles/mixins";


const StyledFooter = styled.footer`
    padding: 10px 0;
    color: ${props => props.theme.colors.primary};
    background-color: rgb(0, 0, 0, 0.03);
    p{
        text-align: center;
    }
    .phones{
    }
`


function Footer(){
    return (
        <StyledFooter>
            <p>د/ محمد ثروت حجازى </p>
            <p>استشارى الباطنة العامة و الروماتيزم و المناعة</p>
        </StyledFooter>
    )
}

export default Footer