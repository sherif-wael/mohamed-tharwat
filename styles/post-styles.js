import styled from "styled-components";
import media from "./media";

const StyledPost = styled.div`
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
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
    .grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        padding: 20px 0;
        grid-gap: 20px;
        ${media(650)`
            grid-template-columns: 1fr;
            .grid-img{
                order: 1;
            }
        `}
        p{
            font-size: 0.8em;
            text-align: center;
        }
        .grid-img{
            margin: auto;
            img{
                min-width: 300px;
            }
        }
    }
`

export default StyledPost