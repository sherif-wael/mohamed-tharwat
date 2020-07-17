import styled from "styled-components";
import media from "../styles/media";
import mixins from "../styles/mixins";
import Link from "next/link";
import Header from "../styles/header";

const StyledContainer = styled.section`
    ${mixins.flexColumnCenter};
    ${mixins.sidePaddings};
    margin-top: 80px;
`

const StyledInfo = styled.ul`
    padding: 30px 50px;
    background-color: rgb(0, 0, 0, 0.06);
    border-radius: 10px;
    box-shadow: 2px 2px 25px rgb(0, 0, 0, 0.12);
    ${media(960)`
        padding: 25px 35px;
    `}
    ${media(600)`
        padding: 20px 25px;
    `}
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
            <Header><h2 style={{textAlign: "center"}}>بالإضافة الى</h2></Header>
            <StyledInfo dir="rtl" style={{marginBottom: "60px"}}>
                    <li>استشاري  الروماتيزم و المناعة بمستشفي دار الفؤاد و مستشفي مصر الدولي</li>
                    <li>مدرس الباطنة و الروماتيزم و المناعة بجامعة نيو جيزة</li>
                    <li><Link href="/clinic"><a>العيادة</a></Link> فيصل : برج الأطباء- اول شارع فيصل- بجانب سوبر ماركت اولاد رجب- الدور العاشر</li>
                    <li>نائب رئيس التحرير للمجلة <a href="https://ejrci.journals.ekb.eg/journal/editorial.board">المصرية لأمراض الروماتيزم
و المناعة الاكلينيكية</a></li>
            </StyledInfo>
            <Header><h2 style={{textAlign: "center"}}>عضو بهذه الجمعيات</h2></Header>
            <StyledInfo dir="rtl">
                    <li>عضو في الجمعية المصرية لعلم المناعة وأمراض الروماتيزم منذ تأسيسها عام 2011</li>
                    <li>عضو الكلية الأمريكية للروماتيزم</li>
                    <li>عضو في مجموعة الدراسة الدولية للمظاهر الكبدية الإضافية المتعلقة بالعدوى بفيروس الالتهاب الكبدي سي (ISG-EHCV)</li>
                    <li>عضو في المجموعة المصرية للتكلس الوعائي منذ مايو 2017</li>
                    <li>عضو باتحاد البحر الأبيض المتوسط ​​لدراسة التهاب الأوعية الدموية المرتبط بالكريوجلوبيولينات</li>
            </StyledInfo>
        </StyledContainer>
    )
}

export default Info