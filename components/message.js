import styled from "styled-components";
import mixins from "../styles/mixins";


const StyledContainer = styled.div`
    ${mixins.flexCenter};
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
    div{
        padding: 12px 20px;
        background-color: #fff;
        color: ${props => props.theme.colors.primary};
        text-align: center;
        border-radius: 10px;
        p{
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: 600;
        }
        button{
            background-color: ${props => props.theme.colors.primary};
            font-size: 18px;
            box-shadow: 2px 5px 15px rgb(0, 0, 0, 0.2);
            border: none;
            border-radius: 20px;
            color: #fff;
            padding: 5px 10px;
        }
    }
`


function Message({message, onClick}){
    return (
        <StyledContainer>
            <div>
                <p>{message}</p>
                <button onClick={onClick}>ok</button>
            </div>
        </StyledContainer>
    )
}

export default Message