import Head from "next/head"
import GlobalStyles from "../styles/global"
import Navbar from "./navbar";
import Footer from "./footer";
import Main from "../styles/main"
import Phone from "./phone"

function Layout({children}){
    return (
        <div>
            <Head>
                <meta name="description" content="دكتور محمد ثروت حجازى، دكتوراه الباطنة العامة و الروماتيزم و المناعة، مدرس الباطنة العامة و الروماتيزم و المناعة و التهابات الاوعية الدموية كلية طب القصر العينى" />
                <title>Dr. Mohamed Tharwat Hegazy</title>
                <link href="https://fonts.googleapis.com/css2?family=Markazi+Text&family=Tajawal&display=swap" rel="stylesheet"></link>
            </Head>
            <GlobalStyles />
            <Phone />
            <Navbar />
            <Main>
                {children}
            </  Main>
            <Footer />
        </div>
    )
}

export default Layout;