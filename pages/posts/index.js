import styled from "styled-components";
import Link from "next/link";
import mixins from "../../styles/mixins";
import posts from "../../lib/posts";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Layout from "../../components/layout";
import media from "../../styles/media"

const StyledContainer = styled.div`
    text-align: right;
    ${mixins.sidePaddings};
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
    margin-bottom: 40px;
    ${media(600)`
        font-size: 18px;
    `}
`

const StyledHeader = styled.h2`
    margin-bottom: 35px;
    span{
        background-image: linear-gradient(to right, #FF0080 75%,  #FF0080);
        background-position: 0 100%;
        background-repeat: repeat-x;
        background-size: 8px 6px;
    }
`

const StyledPostsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px 15px;
    ${media(1100)`
        grid-template-columns: 1fr 1fr;
    `}
    ${media(730)`
        grid-template-columns: 1fr;
    `}
`

const StyledPosInterface = styled.div`
    margin: 0 auto;
    box-sizing: border-box;
    display: grid;
    padding-bottom: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: 150px auto 40px;
    box-shadow: 4px 8px 10px -6px rgb(0, 0, 0, 0.2),
                -4px 8px 10px -8px rgb(0, 0, 0, 0.2);
    overflow: hidden;
    &:hover img{
        transform: scale(1.2);
    }
    img{
        width: 100%;
        height: 100%;
        display: block;
        transition: transform 300ms ease;
    }
    h3{
        padding: 5px 8px;
        margin-bottom: 10px;
    }
    a{
       text-decoration: none;
       padding: 4px 8px;
       margin-right: 15px;
       display: inline-block;
       border: 1px solid ${props => props.theme.colors.primary};
       border-radius: 20px;
       font-size: 16px;
       background-color: transparent;
       transition: background-color 200ms ease,
                    color 200ms ease;
       &:hover{
           color: #fff;
           background-color: ${props => props.theme.colors.primary};
       }
    }
`

export default function Posts(){
    return (
        <Layout>
            <StyledContainer>
                <StyledHeader>
                    <span>بقلم د/ محمد ثروت حجازى</span>
                </StyledHeader>
                <StyledPostsWrapper>
                    <TransitionGroup component={null}>
                        {
                            posts.map(({desc, img, href}, i) => (
                                <CSSTransition classNames="fadeup" timeout={500} key={i} appear in={true}>
                                    <StyledPosInterface style={{transitionDelay: `${i * 250}ms`}}>
                                        <img src={img} alt={`${img.replace(/\.jpg/, "")} image`} />
                                        <h3>{desc}</h3>
                                        <div className="link-wrapper">
                                            <Link href={href}><a>&#8592;اقرأ المزيد</a></Link>
                                        </div>
                                    </StyledPosInterface>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                </StyledPostsWrapper>
            </StyledContainer>
        </Layout>
    )
}