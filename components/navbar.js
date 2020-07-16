import React, {useState} from "react";
import styled from "styled-components";
import mixins from "../styles/mixins";
import media from "../styles/media";
import {useRouter} from "next/router";
import Link from "next/link";

const StyledContainer = styled.header`
    padding: 20px 15px;
    ${mixins.flexBetween};
    overflow: hidden;

`


const StyledLogo = styled.a`
    font-size: 32px;
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 700;
    z-index: 6;
`


const StyledToggler = styled.div`
    padding: 5px;
    display: none;
    cursor: pointer;
    z-index: 6;
    span{
        height: 2px;
        width: 25px;
        background-color: ${props => props.theme.colors.primary};
        display: block;
        margin: 4px;
        transition: transform 300ms ease,
                    opacity 300ms ease;
        border-radius: 1px;
    }
    &.nav-active span:nth-of-type(1){
        transform: translateY(6px) rotate(45deg);
    }
    &.nav-active span:nth-of-type(2){
        opacity: 0;
    }
    &.nav-active span:nth-of-type(3){
        transform: translateY(-6px) rotate(-45deg);
    }
    ${media(600)`
        display: block;
    `}
`

const StyledNav = styled.nav`
    transition: transform 300ms ease;
    a{
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        padding: 3px 12px;
        font-size: 18px;
        margin: 0 10px 0 0;
        &.selected{
            background-color: ${props => props.theme.colors.primary};
            color: #fff;
            border-radius: 20px;
        }
        ${media(600)`
            margin: 0 0 15px;
        `}
    }
    &.nav-active{
        transform: translate(0px);
    }
    ${media(600)`
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        background-color: #fff;
        ${mixins.flexColumnCenter}
    `}
`

function Navbar(){
    let [state, setState] = useState(false);
    let router = useRouter();
    return (
        <StyledContainer>
            <StyledLogo href="/">محمد ثروت</StyledLogo>
            <StyledToggler className={state ? "nav-active" : ""} onClick={() => setState(!state)}>
                <span></span>
                <span></span>
                <span></span>
            </StyledToggler>
            <StyledNav className={state ? "nav-active" : ""}>
                <Link href="/"><a className={router.pathname === "/" ? "selected" : ""}>الصفحة الرئيسية</a></Link>
                <Link href="/clinic"><a className={router.pathname === "/clinic" ? "selected" : ""}>العيادة</a></Link>
            </StyledNav>
        </StyledContainer>
    )
}

export default Navbar;