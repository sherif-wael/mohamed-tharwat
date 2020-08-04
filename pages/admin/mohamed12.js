import React, {useEffect, useState} from "react";
import styled from "styled-components";
import media from "../../styles/media";
import mixins from "../../styles/mixins";
import GlobalStyles from "../../styles/global";
import Head from "next/head";
import axios from "axios";
import {CSSTransition} from "react-transition-group";



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
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px 25px;
    ${media(600)`
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 25px 20px;
    `}
    ${media(360)`
        grid-template-columns: 1fr;
        grid-gap: 20px;
    `}
    a{
        text-decoration: none;
    }
    .order{
        color: ${props => props.theme.colors.primary};
        padding: 10px 30px;
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

export default function AdminPage(){
    let [state, setState] = useState({data: null, error: null});
    useEffect(() => {
        axios
            .get("/api/register")
            .then(res => setState({...state, data: res.data.users}))
            .catch(err => setState({...state, error: err.response.data.message}))
    })
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
                    state.data.map(({name, tel}, i) => (
                        <a href={`tel:${tel}`}>
                            <div className="order" key={i}>
                                <p className="field">:الاسم</p>
                                <p className="value">{name}</p>
                                <p className="field">:التليفون</p>
                                <p className="value">{tel}</p>
                            </div>
                        </a>
                    ))
                }
            </StyledData>
        </div>
    )
}