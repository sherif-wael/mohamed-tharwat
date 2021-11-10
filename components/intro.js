import styled from "styled-components";
import media from "../styles/media";
import mixins from "../styles/mixins";


const StyledContainer = styled.section`
    ${mixins.sidePaddings};
    ${mixins.topPaddings};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: ${props => props.theme.colors.primary};
    // background: radial-gradient(circle at top left,#4a42ec 0%,#521d91 100%);
    // background-color: #521d91;
    align-items: center;
    position: relative;
    overflow: hidden;
    ${media(1100)`
        grid-template-columns: 1fr;
    `}
`


const StyledPersonalImage = styled.div`
    box-sizing: border-box;
    padding: 10px;
    img{
        max-width: 100%;
        max-height: 500px;
        border-radius: 15px;
        display: block;
        transition: transform 300ms ease-out,
                    box-shadow 300ms ease-out;
        &:hover{
            transform: translate(-10px, -10px);
            box-shadow: 15px 15px 4px ${props => props.theme.colors.secondary};
        }
        ${media(1100)`
            margin: 0 auto;
        `}
    }
`

const StyledInfo = styled.div`
    color: #fff;
    text-align: center;
    p{
        font-size: 22px;
        margin: 15px 0;
        ${media(600)`
            font-size: 20px
        `}
        ${media(400)`
            font-size: 18px;
        `}
    }
`

const StyledHeader = styled.div`
    ${mixins.flexCenter};
    h2{
        position: relative;
        &::after{
            ${mixins.after};
            top: 100%;
            left: 0;
            height: 10px;
            background-color: ${props => props.theme.colors.secondary};
            transform-origin: left;
            transition: transform 300ms ease;
        }
        &:hover::after{
            transform: scaleX(0);
            transform-origin: right;
        }
        ${media(400)`
            font-size: 22px;
        `}
    }
`

const StyledPhones = styled.div`
    ${mixins.flexCenter};
    flex-wrap: wrap;
    margin-top: 10px;
    a{
        margin: 10px;
        background-color: ${props => props.theme.colors.secondary};
        padding: 7px 15px;
        border-radius: 20px;
        text-decoration: none;
        color: #fff;
    }
    ${media(300)`
        ${mixins.flexColumnCenter};
        a{
            margin: 0 0 15px;
        }
    `}
`

const StyledWave = styled.img`
    position: absolute;
    width: 100%;
    bottom: 0;
    ${media(400)`
        width: 200%;
    `}
`



function Intro(){
    return (
        <StyledContainer>
            <StyledWave src="/images/1.png" alt="wave image" />
            <StyledPersonalImage>
                <img src="/images/personal.jpeg" alt="personal image of dr. Mohamed Tharwat" />
            </StyledPersonalImage>
            <StyledInfo>
                <StyledHeader><h2>د/ محمد ثروت حجازى</h2></StyledHeader>
                <p>دكتوراه الباطنة العامة و الروماتيزم و المناعة</p>
                <p>استشارى و مدرس الباطنة العامة و الروماتيزم و المناعة و التهاب الاوعية الدموية- كلية الطب- قصر العيني- جامعة القاهرة</p>
                <p>زميل الكلية الامريكية للروماتيزم </p>
                <p>العيادة: برج الاطباء - اول شارع فيصل - الدور العاشر</p>
                <StyledPhones>
                    <a href="tel:+01272901101">01272901101</a>
                    <a href="tel:01092909409">01092909409</a>
                </StyledPhones>
            </StyledInfo>
        </StyledContainer>
    )
}

export default Intro