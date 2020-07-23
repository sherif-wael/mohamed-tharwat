import styled from "styled-components";


const StyledPost = styled.div`
    text-align: right;
    color: ${props => props.theme.colors.primary};
    max-width: 900px;
    margin: 0 auto;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 10px;
    font-size: calc(18px + (26 - 18) * ((100vw - 260px) / (1700 - 260)));
    img{
        display: block;
        max-width: 100%;
        margin-left: auto;
    }
    h2{
        span{
            background-image: linear-gradient(to right, #FF0080 75%,  #FF0080);
            background-position: 0 100%;
            background-repeat: repeat-x;
            background-size: 8px 6px;
        }
    }
    h3{
        text-decoration: underline;
        font-weight: 800;
    }
    ul, ol{
        direction: rtl;
        padding-right: 15px;
        li{
            margin: 10px 0;
        }
    }
`

export default StyledPost