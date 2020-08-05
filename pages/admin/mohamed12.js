import React, {useEffect, useState} from "react";
import styled from "styled-components";
import media from "../../styles/media";
import mixins from "../../styles/mixins";
import GlobalStyles from "../../styles/global";
import Head from "next/head";
import axios from "axios";
import {CSSTransition} from "react-transition-group";
import Moment from "react-moment";


const StyledState = styled.div`
    min-height: 100vh;
    ${mixins.flexCenter};
    font-size: 32px;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
`

const StyledHeader = styled.header`
    color: ${props => props.theme.colors.primary};
    font-size: 32px;
    text-align: center;
    ${media(600)`
        font-size: 26px;
    `}
    ${media(300)`
        font-size: 22px;
    `}
`

const StyledData = styled.div`
    ${mixins.sidePaddings};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px 25px;
    ${media(850)`
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 25px 20px;
    `}
    ${media(450)`
        grid-template-columns: 1fr;
        grid-gap: 20px;
    `}
    .order{
        color: ${props => props.theme.colors.primary};
        padding: 10px 10px;
        box-sizing: border-box;
        box-shadow: 0px 4px 8px 2px rgb(0, 0, 0, 0.15);
        text-align: center;
        transition: transform 200ms ease;
        .field{
            font-size: 20px;
            font-weight: 600;
        }
        .value{
            font-size: 18px;
        }
        &:hover{
            transform: translateY(-10px);
        }
    }
`

const StyledButton = styled.div`
    margin-bottom: 5px;
    text-align: center;
    button{
        background-color: ${props => props.theme.colors.secondary};
        color: #fff;
        padding: 4px 8px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
    }
`

export default function AdminPage(){
    let [state, setState] = useState({data: null, error: null});
    useEffect(() => {
        axios
            .get("/api/register")
            .then(res => setState({...state, data: res.data.users}))
            .catch(err => setState({...state, error: err.response.data.message}))
    }, [])
    let deleteOrder = id => {
        axios
            .delete("/api/register", {data: {id}})
            .then(() => setState({...state, data: state.data.filter(user => user._id !== id)}))
            .catch(err => setState({...state, error: err.response.data.message}))
    }
    if(state.error){
        return <StyledState>{state.error}</StyledState>
    }
    if(!state.data){
        return <StyledState>loading...</StyledState>
    }
    return (
        <div>
            <GlobalStyles />
            <Head>
                <title>Admin</title>
                <link href="https://fonts.googleapis.com/css2?family=Markazi+Text&family=Tajawal&display=swap" rel="stylesheet"></link>
            </Head>
            <StyledHeader>
                <CSSTransition appear timeout={500} in={true} classNames="fadeup">
                    <h1>Hi Mohamed!</h1>
                </CSSTransition>
            </StyledHeader>
            <StyledData>
                {
                    state.data.map(({name, tel, date, _id}, i) => (
                        <div className="order" key={i}>
                            <Moment format="DD-MM-YYYY HH:mm A">{date}</Moment>
                            <p className="field" style={{marginTop: "5px"}}>:الاسم</p>
                            <p className="value">{name}</p>
                            <p className="field">:التليفون</p>
                            <p className="value">{tel}</p>
                            <StyledButton><button onClick={() => deleteOrder(_id)}>delete</button></StyledButton>
                        </div>
                    ))
                }
            </StyledData>
        </div>
    )
}