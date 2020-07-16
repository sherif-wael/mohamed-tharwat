import React, {useState} from "react";
import styled from "styled-components";
import media from "../styles/media";
import mixins from "../styles/mixins";
import axios from "axios";
import Message from "./message";


const StyledContainer = styled.div`
    ${mixins.smallSidePaddings};
    ${mixins.flexCenter};
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;
    margin-top: 100px;
    &::after{
        ${mixins.after};
        height: 100%;
        background-color: ${props => props.theme.colors.primary};
        top: 0;
        left: 0;
        clip-path: polygon(0 0, 100% 28%, 100% 100%, 0% 100%);
    }
`

const StyledForm = styled.form`
    ${mixins.flexColumn};
    padding: 20px 12px;
    border-radius: 5px;
    background-color: #fff;
    position: relative;
    z-index: 2;
    width: 300px;
    box-shadow: 5px 5px 20px rgb(0, 0, 0, 0.25);
    margin-top: -70px;
`

const StyledFormHeader = styled.div`
    ${mixins.flexCenter};
    h3{
        color: ${props => props.theme.colors.primary};
        font-size: 30px;
        font-weight: 800;
    }
`

const StyledLabel = styled.label`
    font-size: 18px;
    text-align: right;
    color: ${props => props.theme.colors.primary};
    margin: 15px 0;
` 
const StyledInput = styled.input`
    font-size: 18px;
    padding: 5px 8px;
`

const StyledButton = styled.div`
    ${mixins.flexCenter};
    margin: 20px 0;
    button{
        padding: 7px 12px;
        color: #fff;
        border: none;
        background-color: ${props => props.theme.colors.primary};
        font-size: 18px;
        border-radius: 5px;
        cursor: pointer;
    }
`

function Register(){
    let [state, setState] = useState({name: "", tel: ""});
    let [sending, setSending] = useState(false);
    let [message, setMessgae] = useState(null);
    let send = () => {
        setSending(true);
        axios
            .post("/api/register", state)
            .then(res => {
                setSending(false);
                setMessgae("تم الحجز بنجاح انتظر مكالمتنا")
            })
            .catch(err => {
                setMessgae(err.response.data.message)
                setSending(false);
            })
    }
    return (
        <StyledContainer>
            <StyledForm>
                <StyledFormHeader>
                    <h3>احجز الان</h3>
                </StyledFormHeader>
                <StyledLabel htmlFor="name">ادخل اسمك</StyledLabel>
                <StyledInput type="text" onChange={e => setState({...state, name: e.target.value})} id="name" value={state.name} />
                <StyledLabel htmlFor="tel">ادخل رقم الهاتف</StyledLabel>
                <StyledInput type="text" onChange={e => setState({...state, tel: e.target.value})} id="tel" value={state.tel} />
                <StyledButton>
                    <button onClick={send} type="button" disabled={sending}>{sending ? "يتم الحجز" : "احجز"}</button>
                </StyledButton>
            </StyledForm>
            {
                message && 
                    <Message message={message} onClick={() => setMessgae(null)} />
            }
        </StyledContainer>
    )
}

export default Register; 