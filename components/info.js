import styled from "styled-components";
import media from "../styles/media";
import mixins from "../styles/mixins";
import Link from "next/link";

const StyledContainer = styled.section`
    ${mixins.flexCenter};
    ${mixins.sidePaddings};
    margin-top: 80px;
`

const StyledInfo = styled.div`
    padding: 30px 50px;
    background-color: rgb(0, 0, 0, 0.06);
    border-radius: 10px;
    box-shadow: 2px 2px 25px rgb(0, 0, 0, 0.12);
    ${media(450)`
        padding: 20px 25px;
    `}
    ul{
        padding: 0;
        li{
            text-align: right;
            color: ${props => props.theme.colors.primary};
            font-size: 20px;
            font-weight: 600;
            margin: 10px 0;
            ${media(450)`
                font-size: 18px;
            `}
            ${media(300)`
                font-size: 14px;
            `}
        }
    }
`



function Info(){
    return (
        <StyledContainer>
            <StyledInfo>
                <ul dir="rtl">
                    <li>استشاري  الروماتيزم و المناعة بمستشفي دار الفؤاد و مستشفي مصر الدولي</li>
                    <li>مدرس الباطنة و الروماتيزم و المناعة بجامعة نيو جيزة</li>
                    <li><Link href="/clinic"><a>العيادة</a></Link> فيصل : برج الأطباء- اول شارع فيصل- بجانب سوبر ماركت اولاد رجب- الدور العاشر</li>
                    <li>نائب رئيس التحرير للمجلة <a href="https://ejrci.journals.ekb.eg/journal/editorial.board">المصرية لأمراض الروماتيزم
والمناعة الاكلينيكية</a></li>
                </ul>
            </StyledInfo>
        </StyledContainer>
    )
}

export default Info