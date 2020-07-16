import Head from "next/head"
import GlobalStyles from "../styles/global"
import Navbar from "./navbar";
import Footer from "./footer";
import Main from "../styles/main"

function Layout({children}){
    return (
        <div>
            <Head>
                <meta name="description" content="دكتور محمد ثروت , دكتوراه الباطنة العامة و الروماتيزم و المناعة , مدرس الباطنة العامة و الوماتيزم و المناعة و التهابات الاوعية الدموية كلية طب القصر العينى" />
                <title>Dr. Mohamed Tharwat</title>
                <link href="https://fonts.googleapis.com/css2?family=Markazi+Text&family=Tajawal&display=swap" rel="stylesheet"></link>
            </Head>
            <GlobalStyles />
            <Navbar />
            <Main>
                {children}
            </  Main>
            <Footer />
        </div>
    )
}

export default Layout;