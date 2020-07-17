import styled from "styled-components";
import mixins from "./mixins";
import media from "./media"

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
        ${media(250)`
            font-size: 18px;
        `}
    }
`

export default StyledHeader